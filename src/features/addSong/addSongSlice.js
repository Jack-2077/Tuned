import { createSlice } from '@reduxjs/toolkit';
import { uuid } from 'uuidv4';

const initialState = {
  tracks: [],
};

export const addSongSlice = createSlice({
  name: 'addSong',
  initialState,
  reducers: {
    addSong: (state, action) => {
      const song = {
        id: uuid(),
      };
      state.tracks.push(action.payload);
    },
  },
});

export const { addSong } = addSongSlice.actions;
