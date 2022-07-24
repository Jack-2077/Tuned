import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

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

      state.queuedTracks.push({ id: uuidv4(), track });
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
