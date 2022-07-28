import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from '../../supabaseClient';

//   tracks: [{
//       id: '',
//       track: { name: '', artist: '', duration: '', albumArt: ''}
//     }]

export const trackListData = createApi({
  reducerPath: 'trackListData',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getTrackList: builder.query({
      queryFn: async (trackListId) => {
        const { data, error } = await supabase
          .from('tunedTracks')
          .select('tracks')
          .eq('trackListId', trackListId);

        return { data, error };
      },
    }),
    saveTrackList: builder.mutation({
      queryFn: async (trackList) => {
        const { data, error } = await supabase
          .from('tunedTracks')
          .insert([trackList]);
        return { data, error };

        // return { data, error };
        // const saveTracks = async () => {
        //   let { data: tracks3, error } = await supabase
        //     .from('tunedTracks')
        //     .insert(testTrack);

        //   if (error) console.log('error', error);
        // };
      },
    }),
  }),
});

export const { useGetTrackListQuery, useSaveTrackListMutation } = trackListData;
// const initialState = {
//   status: 'idle', //idle || loading || success || fail
//   tracks: [],
//   error: null,
// };

// const fetchTrackList = createAsyncThunk(
//   'trackList/fetchTrackList',
//   async (trackListId) => {
//     const { data: tracks, error } = await supabase
//       .from('tunedTracks')
//       .select('tracks')
//       .eq('trackListId', trackListId);

//     if (error) return error;

//     return tracks;
//   }
// );

// export const trackListSlice = createSlice({
//   name: 'trackList',
//   initialState,
//   reducers: {
//     trackListLoading(state, action) {
//       if (state.loading === 'idle') {
//         state.loading = 'pending';
//       }
//     },
//     trackListReceived(state, action) {
//       if ( state.loading === 'pending' )
//       {
//         state.loading = 'idle';
//         state.tracks = action.payload;
//       }
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(fetchTrackList.pending, (state, action) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchTrackList.fulfilled, (state, action) => {
//         state.status = 'success';
//         state.tracks = action.payload;
//       })
//       .addCase(fetchTrackList.rejected, (state, action) => {
//         state.status = 'fail';
//         state.error = action.error.message;
//       });
//   },
// });

// export const selectAllFetchedTracks = (state) => state.trackList.tracks;
// export const getTrackListStatus = (state) => state.trackList.status;
// export const getTrackListError = (state) => state.trackList.error;

// export const { trackListLoading, trackListReceived } = trackListSlice.actions;
