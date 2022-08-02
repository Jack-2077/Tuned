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
  grid-template-areas:
    'sidebar add-track track-queue'
    'sidebar track-list track-queue'
    'sidebar track-player track-player';
  grid-template-columns: auto 1fr 0.4fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  /* height: 100%;
  min-height: 100%;
  position: relative;
  width: 100%;

  gap: 0.6em 0.6em; */
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <Sidebar />
        <AddTrack />
        <TrackList />
        <TrackPlayer />
        <TrackQueue />
      </MainContainer>
    </>
  );
}

export default App;
