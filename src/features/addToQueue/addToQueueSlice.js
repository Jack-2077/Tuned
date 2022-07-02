import { createSlice } from '@reduxjs/toolkit';

//   queuedTracks: [{
//       id: '',
//       track: {name: '', artist: '', duration: ''}
//     }]

const initialState = {
  queuedTracks: [],
};

export const addToQueueSlice = createSlice({
  name: 'addToQueue',
  initialState,
  reducers: {
    addToQueue: (state, action) => {
      const { id, track } = action.payload;
      state.queuedTracks.push({ id, track });
    },
    removeFromQueue: (state, action) => {
      state.queuedTracks = state.queuedTracks.filter(
        (track) => track.id !== action.payload
      );
    },
  },
});

export const { addToQueue, removeFromQueue } = addToQueueSlice.actions;

export default addToQueueSlice.reducer;
