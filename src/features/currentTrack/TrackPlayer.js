import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

import { useDispatch, useSelector } from 'react-redux';
import {
  playTrack,
  selectCurrentTrack,
  toggleIsPlaying,
} from './currentTrackSlice';

import { ReactComponent as PlayIcon } from '../../assests/icons/play-icon.svg';
import { ReactComponent as PauseIcon } from '../../assests/icons/pause-icon.svg';
import { ReactComponent as PlayLastIcon } from '../../assests/icons/last-icon.svg';
import { ReactComponent as PlayNextIcon } from '../../assests/icons/next-icon.svg';

import { StyledTrackPlayer } from '../../components/styles';
import { selectAllqueuedTracks } from '../addToQueue/addToQueueSlice';

const currentTrack = {
  id: 'okWWDu97iepSP3NtR-Cgs',
  name:
    'React Redux Full Course for Beginners | Redux Toolkit Complete Tutorial',
  artist: 'Redux',
  albumArt: 'https://img.youtube.com/vi/NqzdVN2tyvQ/0.jpg',
  duration: 14379,
  trackUrl: 'https://www.youtube.com/watch?v=NqzdVN2tyvQ&ab_channel=DaveGray',
  isPlaying: false,
};

export default function TrackPlayer() {
  const ReactPlayerRef = useRef();
  const [positionInQueue, setPositionInQueue] = useState(0);
  const [playedDuration, setPlayedDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);

  const dispatch = useDispatch();
  const queuedTracks = useSelector(selectAllqueuedTracks);
  // const currentTrack = useSelector(selectCurrentTrack);
  const currentTrackId = currentTrack.id;

  const isEmpty = Object.keys(currentTrack).length === 0;

  useEffect(() => {
    if (!isEmpty) {
      const trackIndex = queuedTracks.findIndex(
        (track) => track.id === currentTrackId
      );
      setPositionInQueue(trackIndex);
    }
  }, [queuedTracks, currentTrackId]);

  useEffect(() => {
    if (!isEmpty) {
      const nextTrack = queuedTracks[positionInQueue + 1];

      if (playedDuration >= 0.99 && nextTrack) {
        const { id, track } = nextTrack;
        dispatch(playTrack({ id, ...track }));
      }
    }
  }, [queuedTracks, playedDuration, dispatch, positionInQueue]);

  if (isEmpty) return null;

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

  return (
    <StyledTrackPlayer>
      <img src={currentTrack.albumArt} alt={currentTrack.name} />
      <div className='track-controls'>
        <p className='overflow-ellipsis'>{currentTrack.name}</p>
        <p className='overflow-ellipsis'>{currentTrack.artist}</p>
        <div className='track__item__icons'>
          <div className='icons-tooltip'>
            <button
              className='nextLastButton'
              aria-label='Last'
              aria-expanded={false}
              onClick={handleLastTrack}
            >
              <PlayLastIcon />
            </button>

            <span className='icons-tooltip-text icons-mediacontrols'>
              Last Track
            </span>
          </div>

          <div className='icons-tooltip'>
            <button
              className='playPauseButton'
              aria-label={currentTrack.isPlaying ? 'pause' : 'play'}
              aria-expanded={false}
              onClick={() => dispatch(toggleIsPlaying())}
            >
              {currentTrack.isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>

            <span className='icons-tooltip-text icons-mediacontrols'>
              {currentTrack.isPlaying ? 'Pause Track' : 'Play Track'}
            </span>
          </div>

          <div className='icons-tooltip'>
            <button
              aria-label='next'
              aria-expanded={false}
              onClick={handleNextTrack}
            >
              <PlayNextIcon className='next' />
            </button>
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
