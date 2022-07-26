import { createSlice, nanoid } from '@reduxjs/toolkit';

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
      const { track } = action.payload;

      state.queuedTracks.push({ id: nanoid(), track });
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

export const selectAllqueuedTracks = (state) => state.addToQueue.queuedTracks;
