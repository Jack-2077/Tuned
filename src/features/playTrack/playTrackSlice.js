import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTrack: {},
};

export const playTrackSlice = createSlice({
  name: 'playTrack',
  initialState,
  reducers: {
    playTrack: (state, action) => {
      //id and track data
      state.currentTrack = { ...action.payload, isPlaying: true };
    },
    pauseTrack: (state, action) => {
      console.log('hey');
      state.currentTrack = { ...state.currentTrack, isPlaying: false };
    },
  },
});

export const { playTrack, pauseTrack } = playTrackSlice.actions;

export default playTrackSlice.reducer;
