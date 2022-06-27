import React from 'react';
import styled from 'styled-components/macro';
import { StyledSongPlayer } from './styles';

const SongPlayerContainer = styled.div`
  grid-area: song-player;
  /* color: red; */
  background-color: var(--dark-grey);
`;

const tracks = {
  name: 'Begin Again',
  artists: [{ name: 'Ben Bohmer' }],
  album_art: 'https://i.scdn.co/image/ab67616d00001e02f31ced0e5fd5ed524804f4a5',
  duration_ms: '3:58',
};
export default function SongPlayer() {
  return (
    <SongPlayerContainer>
      <StyledSongPlayer albumArt={tracks.album_art}>
        {/* <img src={tracks.album_art} /> */}
        <div className='current-track'>
          <div className='track-controls'>
            <p>{tracks.name}</p>
            <p>{tracks.artists[0].name}</p>
            <p>
              <span>p</span>
              <span>s</span>
              <span>t</span>
            </p>
            <p>------------------------</p>
          </div>
        </div>
      </StyledSongPlayer>
    </SongPlayerContainer>
  );
}
