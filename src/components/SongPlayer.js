import React from 'react';
import styled from 'styled-components/macro';

const SongPlayerContainer = styled.div`
  grid-area: song-player;
  color: red;
  background-color: var(--dark-grey);
`;
export default function SongPlayer() {
  return <SongPlayerContainer>SongPlayer</SongPlayerContainer>;
}
