import { createSlice } from '@reduxjs/toolkit';

const starredSlice = createSlice({
  name: 'starred',
  initialState: {
    starredIds: [],
  },
  reducers: {
    starMovie: (state, action) => {
      if (!state.starredIds.includes(action.payload)) {
        state.starredIds = [action.payload, ...state.starredIds];
      }
    },
    unstarMovie: (state, action) => {
      state.starredIds = state.starredIds.filter(id => id !== action.payload);
    },
    clearAllStarred: state => {
      state.starredIds = [];
    },
  },
});

export default starredSlice;
