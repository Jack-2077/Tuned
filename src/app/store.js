import { configureStore } from '@reduxjs/toolkit';
import addTrackReducer from '../features/addTrack/addTrackSlice';
import addToQueueReducer from '../features/addToQueue/addToQueueSlice';
import currentTrackReducer from '../features/currentTrack/currentTrackSlice';

export const store = configureStore({
  reducer: {
    addTrack: addTrackReducer,
    addToQueue: addToQueueReducer,
    currentTrack: currentTrackReducer,
  },
});
