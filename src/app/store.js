import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import addTrackReducer from '../features/addTrack/addTrackSlice';
import addToQueueReducer from '../features/addToQueue/addToQueueSlice';
import currentTrackReducer from '../features/currentTrack/currentTrackSlice';
import { trackListData } from '../features/TrackList/TrackListSlice';

export const store = configureStore({
  reducer: {
    addTrack: addTrackReducer,
    addToQueue: addToQueueReducer,
    currentTrack: currentTrackReducer,
    [trackListData.reducerPath]: trackListData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trackListData.middleware),
});
