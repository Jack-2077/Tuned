import React from 'react';
import styled from 'styled-components';

const SongQueueContainer = styled.div`
  grid-area: song-queue;
  color: red;
`;
export default function SongQueue() {
  return <SongQueueContainer>Song Queue</SongQueueContainer>;
}
