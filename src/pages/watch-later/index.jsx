import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from '../../components/common/Icon';
import watchLaterSlice from '../../data/watchLaterSlice';
import { MoviesGrid } from '../../features/movies/MoviesGrid';

import './watch-later.scss';

const WatchLater = () => {
  const state = useSelector(state => state);
  const { watchLater, movies } = state;
  const { removeAllWatchLater } = watchLaterSlice.actions;
  const dispatch = useDispatch();

  // Map watchLaterIds to movie objects
  const watchLaterMovies = watchLater.watchLaterIds
    .map(id => movies.data.find(movie => movie.id === id))
    .filter(Boolean);

  return (
    <div className="starred" data-testid="watch-later-div">
      {watchLaterMovies.length > 0 && (
        <div data-testid="watch-later-movies" className="starred-movies">
          <h6 className="header">Watch Later List</h6>
          <MoviesGrid movies={watchLaterMovies} />

          <footer className="text-center">
            <button className="btn btn-primary" onClick={() => dispatch(removeAllWatchLater())}>
              Empty list
            </button>
          </footer>
        </div>
      )}

      {watchLaterMovies.length === 0 && (
        <div className="text-center empty-cart">
          <Icon iconName="heart" width="1rem" height="1rem" />
          <p>You have no movies saved to watch later.</p>
          <p>
            Go to <Link to="/">Home</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export { WatchLater };
