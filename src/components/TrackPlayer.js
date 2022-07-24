import React from 'react';
import ReactPlayer from 'react-player';

import { useDispatch, useSelector } from 'react-redux';
import { StyledTrackPlayer } from './styles';

import { ReactComponent as PlayIcon } from '../assests/icons/play-icon.svg';
import { ReactComponent as PauseIcon } from '../assests/icons/pause-icon.svg';
import { ReactComponent as PlayLastIcon } from '../assests/icons/play-last.svg';
import { ReactComponent as PlayNextIcon } from '../assests/icons/play-next.svg';
import { useState, useEffect, useRef } from 'react';
import {
  playTrack,
  toggleIsPlaying,
} from '../features/currentTrack/currentTrackSlice';

export default function TrackPlayer() {
  const dispatch = useDispatch();

  const ReactPlayerRef = useRef();
  const [positionInQueue, setPositionInQueue] = useState(0);
  const [playedDuration, setPlayedDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);

  const queuedTracks = useSelector((state) => state.addToQueue.queuedTracks);
  const currentTrack = useSelector((state) => state.currentTrack.track);
  const currentTrackId = currentTrack.id;

  function handleSeekMouseDown() {
    setSeeking(true);
  }

  function handleSeekChange(e) {
    setPlayedDuration(e.target.value);
  }

  function handleSeekMouseUp() {
    setSeeking(false);
    ReactPlayerRef.current.seekTo(playedDuration);
  }

  function handleProgress({ played }) {
    if (!seeking) {
      setPlayedDuration(played);
    }
  }

  function handleLastTrack() {
    const lastTrack = queuedTracks[positionInQueue - 1];
    if (lastTrack) {
      const { id, track } = lastTrack;
      dispatch(playTrack({ id, ...track }));
    }
  }
  function handleNextTrack() {
    const nextTrack = queuedTracks[positionInQueue + 1];
    if (nextTrack) {
      const { id, track } = nextTrack;
      dispatch(playTrack({ id, ...track }));
    }
  }
  useEffect(() => {
    const trackIndex = queuedTracks.findIndex(
      (track) => track.id === currentTrackId
    );
    setPositionInQueue(trackIndex);
  }, [queuedTracks, currentTrackId]);

  useEffect(() => {
    const nextTrack = queuedTracks[positionInQueue + 1];

    if (playedDuration >= 0.99 && nextTrack) {
      const { id, track } = nextTrack;
      dispatch(playTrack({ id, ...track }));
    }
  }, [queuedTracks, playedDuration, dispatch, positionInQueue]);

  if (Object.keys(currentTrack).length == 0) return null;

  return (
    <StyledTrackPlayer>
      <img src={currentTrack.albumArt} />
      <div className='track-controls'>
        <p className='overflow-ellipsis'>{currentTrack.name}</p>
        <p className='overflow-ellipsis'>{currentTrack.artist}</p>
        <div className='track__item__icons'>
          <div className='icons-tooltip'>
            <PlayLastIcon onClick={handleLastTrack} />
            <span className='icons-tooltip-text icons-mediacontrols'>
              Last Track
            </span>
          </div>

          <div className='icons-tooltip'>
            {currentTrack.isPlaying ? (
              <PauseIcon onClick={() => dispatch(toggleIsPlaying())} />
            ) : (
              <PlayIcon onClick={() => dispatch(toggleIsPlaying())} />
            )}

            <span className='icons-tooltip-text icons-mediacontrols'>
              {currentTrack.isPlaying ? 'Pause Track' : 'Play Track'}
            </span>
          </div>

          <div className='icons-tooltip'>
            <PlayNextIcon className='next' onClick={handleNextTrack} />
            <span className='icons-tooltip-text icons-mediacontrols'>
              Next Track
            </span>
          </div>
        </div>

        <div className='input-slider-container'>
          <input
            className='slider'
            type='range'
            min={0}
            max={1}
            step={0.01}
            value={playedDuration}
            onMouseDown={handleSeekMouseDown}
            onChange={handleSeekChange}
            onMouseUp={handleSeekMouseUp}
          />
          <ReactPlayer
            ref={ReactPlayerRef}
            url={currentTrack.trackUrl}
            onProgress={handleProgress}
            playing={currentTrack.isPlaying}
            hidden
          />
        </div>
      </div>
    </StyledTrackPlayer>
  );
}
