import { configureStore } from '@reduxjs/toolkit';
import addTrackReducer from '../features/addTrack/addTrackSlice';
import addToQueueReducer from '../features/addToQueue/addToQueueSlice';

export const store = configureStore({
  reducer: {
    addTrack: addTrackReducer,
    addToQueue: addToQueueReducer,
  },
});
