import starredSlice from '../data/starredSlice';
import { moviesMock } from './movies.mocks';

describe('starredSlice test', () => {
  const state = { starredIds: [] };

  it('should set an initial state', () => {
    const initialState = state;
    const action = { type: '' };
    const result = starredSlice.reducer(initialState, action);
    expect(result).toEqual({ starredIds: [] });
  });

  it('should add movie id to starred', () => {
    const initialState = { ...state, starredIds: [] };
    const action = starredSlice.actions.starMovie(moviesMock[0].id);
    const result = starredSlice.reducer(initialState, action);
    expect(result.starredIds[0]).toBe(moviesMock[0].id);
  });

  it('should remove movie id from starred', () => {
    const initialState = { ...state, starredIds: [moviesMock[0].id, moviesMock[1].id] };
    const action = starredSlice.actions.unstarMovie(moviesMock[0].id);
    const result = starredSlice.reducer(initialState, action);
    expect(result.starredIds[0]).toBe(moviesMock[1].id);
  });

  it('should remove all movie ids', () => {
    const initialState = { ...state, starredIds: [moviesMock[0].id, moviesMock[1].id] };
    const action = starredSlice.actions.clearAllStarred(state);
    const result = starredSlice.reducer(initialState, action);
    expect(result.starredIds.length).toEqual(0);
  });
});
