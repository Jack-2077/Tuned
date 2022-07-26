import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { supabase } from '../../supabaseClient';

//   tracks: [{
//       id: '',
//       track: { name: '', artist: '', duration: '', albumArt: ''}
//     }]

const initialState = {
  status: 'idle', //idle || loading || sucess || fail
  tracks: [],
  error: null,
};

const fetchTrackListById = createAsyncThunk(
  'trackList/fetchByIdStatus',
  async (trackListId, thunkAPI) => {
    const { data: tracks, error } = await supabase
      .from('tunedTracks')
      .select('tracks')
      .eq('trackListId', trackListId);

    if (error) console.log('error', error);
    return tracks;
  }
);

export const TrackListSlice = createSlice({
  name: 'TrackList',
  initialState,
  reducers: {
    trackListLoading(state, action) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    trackListReceived(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.tracks = action.payload;
      }
    },
  },
});

export const { trackListLoading, trackListReceived } = TrackListSlice.actions;
