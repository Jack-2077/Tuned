import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  track: {},
};

export const currentTrackSlice = createSlice({
  name: 'currentTrack',
  initialState,
  reducers: {
    toggleIsPlaying: (state) => {
      state.track.isPlaying = !state.track.isPlaying;
    },
    playTrack: (state, action) => {
      //id and track data
      state.track = { ...action.payload, isPlaying: true };
    },
  },
});

export const { toggleIsPlaying, playTrack } = currentTrackSlice.actions;

export default currentTrackSlice.reducer;

export const selectCurrentTrack = (state) => state.track;
