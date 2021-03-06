import React from 'react';
import styled from 'styled-components/macro';
import { GlobalStyles } from '../components/styles';

import {
  AddTrack,
  Sidebar,
  TrackList,
  TrackPlayer,
  TrackQueue,
} from '../components';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1.4fr 0.8fr;
  grid-template-rows: 0.3fr 0.7fr 1fr;
  gap: 0.6em 0.6em;
  grid-template-areas:
    'sidebar add-track player-queue-container'
    'sidebar track-list player-queue-container'
    'sidebar track-list player-queue-container';
  width: 100vw;
  height: 100vh;
`;

const PlayerQueueContainer = styled.div`
  grid-area: player-queue-container;
  display: grid;
  /* grid-template-columns: 1fr; */
  grid-template-rows: 1.2fr 0.8fr;
  gap: 1em 1em;
  grid-template-areas:
    'track-queue'
    'track-player';

  background-color: var(--dark-grey);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <Sidebar />
        <AddTrack />
        <TrackList />
        <PlayerQueueContainer>
          <TrackQueue />
          <TrackPlayer />
        </PlayerQueueContainer>
      </MainContainer>
    </>
  );
}

export default App;
