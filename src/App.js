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

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1.5fr 0.7fr;
  grid-template-rows: 0.3fr 0.7fr 1fr;
  gap: 1em 1em;
  grid-template-areas:
    'sidebar add-song song-queue'
    'sidebar song-list song-queue'
    'sidebar song-list song-player';
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Sidebar />
        <AddSong />
        <SongList />
        <SongPlayer />
        <SongQueue />
      </Container>
    </>
  );
}

export default App;
