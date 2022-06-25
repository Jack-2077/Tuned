import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  AddSong,
  Sidebar,
  SongList,
  SongPlayer,
  SongQueue,
} from './components';

const theme = {
  primary: '#000000',
  secondary: '#161618',
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1.5fr 0.7fr;
  grid-template-rows: 0.3fr 0.7fr 1fr;
  gap: 1em 1em;
  grid-template-areas:
    'sidebar add-song song-player'
    'sidebar song-list song-player'
    'sidebar song-list song-queue';
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Sidebar />
        <AddSong />
        <SongList />
        <SongPlayer />
        <SongQueue />
      </ThemeProvider>
    </Container>
  );
}

export default App;
