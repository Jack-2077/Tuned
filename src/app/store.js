import { configureStore } from '@reduxjs/toolkit';
import addTrackReducer from '../features/addTrack/addTrackSlice';
import addToQueueReducer from '../features/addToQueue/addToQueueSlice';
import playTrackSliceReducer from '../features/playTrack/playTrackSlice';

export const store = configureStore({
  reducer: {
    addTrack: addTrackReducer,
    addToQueue: addToQueueReducer,
    playTrack: playTrackSliceReducer,
  },
});
