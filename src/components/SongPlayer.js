import React from 'react';
import styled from 'styled-components';

const SongPlayerContainer = styled.div`
  grid-area: song-player;
  color: red;
`;
export default function SongPlayer() {
  return <SongPlayerContainer>SongPlayer</SongPlayerContainer>;
}
