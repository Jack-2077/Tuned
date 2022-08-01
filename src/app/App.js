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
  grid-template-columns: auto 1fr 0.5fr;
  grid-template-rows: auto 1fr auto;
  /* height: 100%;
  width: 100%; */

  gap: 0.6em 0.6em;
  grid-template-areas:
    'sidebar add-track track-queue'
    'sidebar track-list track-queue'
    'sidebar track-player track-player';
  /* min-height: 0; 
  min-width: 0; */
  /* width: 100vw;
  height: 100vh; */
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
