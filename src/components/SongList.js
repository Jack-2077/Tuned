import React from 'react';
import styled from 'styled-components';

const SongListContainer = styled.div`
  grid-area: song-list;
  color: red;
`;
export default function SongList() {
  return <SongListContainer>SONG LIST</SongListContainer>;
}
