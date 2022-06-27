import React from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './components/styles';

import {
  AddSong,
  Sidebar,
  SongList,
  SongPlayer,
  SongQueue,
} from './components';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1.9fr 0.6fr;
  grid-template-rows: 0.3fr 0.7fr 1fr;
  gap: 1em 1em;
  grid-template-areas:
    'sidebar add-song player-queue-container'
    'sidebar song-list player-queue-container'
    'sidebar song-list player-queue-container';
  width: 100vw;
  height: 100vh;
`;

const PlayerQueueContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.2fr 0.8fr;
  gap: 1em 1em;
  grid-template-areas:
    'song-queue'
    'song-player';
  grid-area: player-queue-container;
  background-color: var(--dark-grey);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <Sidebar />
        <AddSong />
        <SongList />
        <PlayerQueueContainer>
          <SongQueue />
          <SongPlayer />
        </PlayerQueueContainer>
      </MainContainer>
    </>
  );
}

export default App;
