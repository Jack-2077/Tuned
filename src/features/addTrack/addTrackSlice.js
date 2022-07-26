import { createSlice, nanoid } from '@reduxjs/toolkit';

//   tracks: [{
//       id: '',
//       track: { name: '', artist: '', duration: '', albumArt: ''}
//     }]

const initialState = {
  tracks: [],
};

export const addTrackSlice = createSlice({
  name: 'addTrack',
  initialState,
  reducers: {
    addTrack: (state, action) => {
      const track = {
        id: nanoid(),
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

export const selectAllTracks = (state) => state.addTrack.tracks;
