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
      },
    }),
  }),
});

export const { useGetTrackListQuery, useSaveTrackListMutation } = trackListData;
