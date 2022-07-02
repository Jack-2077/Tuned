import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// const initialState = {
//   tracks: [
//     {
//       id: '',
//       track: {
//         name: '',
//         artist: '',
//         duration: '',
//         albumArt: '',
//       },
//     },
//   ],
// };

const initialState = {
  tracks: [],
};

export const addTrackSlice = createSlice({
  name: 'addTrack',
  initialState,
  reducers: {
    addTrack: (state, action) => {
      const track = {
        id: uuidv4(),
        track: action.payload,
      };

      state.tracks.push(track);
    },
    removeTrack: (state, action) => {
      state.tracks = state.tracks.filter(
        (track) => track.id !== action.payload
      );
    },
  },
});

export const { addTrack, removeTrack } = addTrackSlice.actions;

export default addTrackSlice.reducer;
