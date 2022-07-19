import React from 'react';
import ReactPlayer from 'react-player';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { StyledTrackPlayer } from './styles';

import { ReactComponent as PlayIcon } from '../assests/icons/play-icon.svg';
import { ReactComponent as PauseIcon } from '../assests/icons/pause-icon.svg';
import { ReactComponent as PlayLastIcon } from '../assests/icons/play-last.svg';
import { ReactComponent as PlayNextIcon } from '../assests/icons/play-next.svg';
import { useState } from 'react';
import { toggleIsPlaying } from '../features/currentTrack/currentTrackSlice';

const TrackPlayerContainer = styled.div`
  grid-area: track-player;
  width: 100%;
  height: 100%;
  color: red;
`;

const tracks = {
  name: 'Begin Again',
  artists: [{ name: 'Ben Bohmer' }],
  album_art: 'https://i.scdn.co/image/ab67616d00001e02f31ced0e5fd5ed524804f4a5',
  duration_ms: '3:58',
};

const tracks2 = {
  id: '10838f8b-76ac-4acd-b28f-0ab78ea88c51',
  name: 'React',
  artist: 'Redux',
  albumArt: 'https://img.youtube.com/vi/NqzdVN2tyvQ/0.jpg',
  duration: 14379,
  trackUrl: 'https://www.youtube.com/watch?v=NqzdVN2tyvQ&ab_channel=DaveGray',
  isPlaying: false,
};

export default function TrackPlayer() {
  const dispatch = useDispatch();

  const [playedDuration, setPlayedDuration] = useState(0);

  const currentTrack = useSelector((state) => state.currentTrack.track);

  function handleProgressChange(event, newValue) {
    setPlayedDuration(newValue);
  }

  return (
    <TrackPlayerContainer>
      <StyledTrackPlayer>
        <img src={currentTrack.albumArt} />
        <div className='current-track'>
          <div className='track-controls'>
            <p>{currentTrack.name}</p>
            <p className='overflow-ellipsis'>{currentTrack.artist}</p>
            <div className='track__item__icons'>
              <div className='icons-tooltip'>
                <PlayLastIcon />
                <span className='icons-tooltip-text'>Last Track</span>
              </div>

              <div className='icons-tooltip'>
                {currentTrack.isPlaying ? (
                  <PauseIcon onClick={() => dispatch(toggleIsPlaying())} />
                ) : (
                  <PlayIcon onClick={() => dispatch(toggleIsPlaying())} />
                )}

                <span className='icons-tooltip-text'>
                  {currentTrack.isPlaying ? 'Pause Track' : 'Play Track'}
                </span>
              </div>

              <div className='icons-tooltip'>
                <PlayNextIcon className='next' />
                <span className='icons-tooltip-text'>Next Track</span>
              </div>
            </div>

            <div className='test'>
              <input
                type='range'
                min={0}
                max={1}
                value={playedDuration}
                onChange={(e) => setPlayedDuration(e.target.value)}
                step={0.01}
                className='slider'
              />
            </div>
          </div>
          <ReactPlayer
            url={currentTrack.trackUrl}
            onProgress={({ played, playedSeconds }) => {
              setPlayedDuration(played);
              console.log(played);
            }}
            playing={currentTrack.isPlaying}
            hidden
          />
        </div>
      </StyledTrackPlayer>
    </TrackPlayerContainer>
  );
}
