import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import starredSlice from '../../data/starredSlice';
import { MoviesGrid } from '../../features/movies/MoviesGrid';

import './starred.scss';

const Starred = () => {
  const state = useSelector(state => state);
  const { starred, movies } = state;
  const { clearAllStarred } = starredSlice.actions;
  const dispatch = useDispatch();

  // Map starred IDs to movie objects
  const starredMovies = starred.starredIds
    .map(id => movies.data.find(movie => movie.id === id))
    .filter(Boolean);

  return (
    <div className="starred" data-testid="starred">
      {starredMovies.length > 0 && (
        <div data-testid="starred-movies" className="starred-movies">
          <h6 className="header">Starred movies</h6>
          <MoviesGrid movies={starredMovies} />

          <footer className="text-center">
            <button className="btn btn-primary" onClick={() => dispatch(clearAllStarred())}>
              Remove all starred
            </button>
          </footer>
        </div>
      )}

      {starredMovies.length === 0 && (
        <div className="text-center empty-cart">
          <Icon iconName="star" width="1rem" height="1rem" />
          <p>There are no starred movies.</p>
          <p>
            Go to <Link to="/">Home</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export { Starred };
