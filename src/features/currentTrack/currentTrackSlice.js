import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  track: {},
};

export const currentTrackSlice = createSlice({
  name: 'currentTrack',
  initialState,
  reducers: {
    setCurrentTrack: (state, action) => {
      state.track = { ...action.payload, isPlaying: true };
    },
    toggleIsPlaying: (state) => {
      state.track.isPlaying = !state.track.isPlaying;
    },
    playTrack: (state, action) => {
      //id and track data
      state.track = { ...action.payload, isPlaying: true };
    },
    pauseTrack: (state, action) => {
      state.track = { ...state.track, isPlaying: false };
    },
  },
});

export const {
  setCurrentTrack,
  toggleIsPlaying,
  playTrack,
  pauseTrack,
} = currentTrackSlice.actions;

export default currentTrackSlice.reducer;
