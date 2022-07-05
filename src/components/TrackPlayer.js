import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { StyledTrackPlayer } from './styles';

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

const tracks2 = [
  {
    id: '123',
    track: {
      name: 'React',
      artist: 'Redux',
      albumArt: 'https://img.youtube.com/vi/NqzdVN2tyvQ/0.jpg',
      duration: 14379,
    },
  },
];
export default function TrackPlayer() {
  const currentTrack = useSelector((state) => state.playTrack.currentTrack);
  return (
    <TrackPlayerContainer>
      <StyledTrackPlayer>
        <img src={currentTrack.albumArt} />
        <div className='current-track'>
          <div className='track-controls'>
            <p>{currentTrack.name}</p>
            <p>{currentTrack.artist}</p>
            <p>
              <span>p</span>
              <span>s</span>
              <span>t</span>
            </p>
            <p>------------------------</p>
          </div>
        </div>
      </StyledTrackPlayer>
    </TrackPlayerContainer>
  );
}
