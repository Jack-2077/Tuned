import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { StyledTrackPlayer } from './styles';

import { ReactComponent as PlayIcon } from '../assests/icons/play-icon.svg';
import { ReactComponent as PauseIcon } from '../assests/icons/pause-icon.svg';
import { ReactComponent as PlayLastIcon } from '../assests/icons/play-last.svg';
import { ReactComponent as PlayNextIcon } from '../assests/icons/play-next.svg';

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
  // const currentTrack = useSelector((state) => state.playTrack.currentTrack);
  const currentTrack = tracks2;
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
                  <>
                    <PauseIcon />
                    <span className='icons-tooltip-text'>Pause track</span>
                  </>
                ) : (
                  <>
                    <PlayIcon />
                    <span className='icons-tooltip-text'>Play track</span>
                  </>
                )}
              </div>

              <div className='icons-tooltip'>
                <PlayNextIcon />
                <span className='icons-tooltip-text'>Next Track</span>
              </div>

              <span>
                <span />
                <span />
                <span>
                  <input />
                </span>
              </span>
            </div>
          </div>
          <ReactPlayer
            url={currentTrack.trackUrl}
            playing={currentTrack.isPlaying}
            hidden
          />
        </div>
      </StyledTrackPlayer>
    </TrackPlayerContainer>
  );
}
