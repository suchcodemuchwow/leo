import { createSlice } from '@reduxjs/toolkit';

const watchLaterSlice = createSlice({
  name: 'watch-later',
  initialState: {
    watchLaterIds: [],
  },
  reducers: {
    addToWatchLater: (state, action) => {
      if (!state.watchLaterIds.includes(action.payload)) {
        state.watchLaterIds = [action.payload, ...state.watchLaterIds];
      }
    },
    removeFromWatchLater: (state, action) => {
      state.watchLaterIds = state.watchLaterIds.filter(id => id !== action.payload);
    },
    removeAllWatchLater: state => {
      state.watchLaterIds = [];
    },
  },
});

export default watchLaterSlice;
