import cx from "clsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import placeholder from "../../../assets/not-found-500X750.jpeg";
import { Icon } from "../../../components/common/Icon";
import starredSlice from "../../../data/starredSlice";
import watchLaterSlice from "../../../data/watchLaterSlice";
import { useTrailerDialog } from "../../../hooks/useTrailerDialog";

const MovieActions = (props) => {
  const dispatch = useDispatch();
  const { starMovie, unstarMovie } = starredSlice.actions;
  const { addToWatchLater, removeFromWatchLater } = watchLaterSlice.actions;

  const { isStarred, isWatchLater, movieId, onViewTrailer } = props;

  const handleStar = () => {
    dispatch(isStarred ? unstarMovie(movieId) : starMovie(movieId));
  };

  const handleWatchLater = () => {
    const action = isWatchLater ? removeFromWatchLater : addToWatchLater;
    dispatch(action(movieId));
  };

  return (
    <div className="actions">
      <span
        className="btn-star"
        data-testid={isStarred ? "unstarred-link" : "starred-link"}
        onClick={handleStar}
        aria-pressed={isStarred}
        tabIndex={0}
        role="button"
      >
        <Icon iconName={isStarred ? "star-fill" : "star"} />
      </span>
      <button
        type="button"
        data-testid={isWatchLater ? "remove-watch-later" : "watch-later"}
        className={`btn btn-light btn-watch-later${
          isWatchLater ? " blue" : ""
        }`}
        onClick={handleWatchLater}
      >
        {isWatchLater ? <Icon iconName="check" /> : "Watch Later"}
      </button>
      <button type="button" className="btn btn-dark" onClick={() => onViewTrailer(movieId)}>
        View Trailer
      </button>
    </div>
  );
};

const Movie = ({ movie }) => {
  const [cardIsOpened, setCardIsOpened] = useState(false);
  const { viewTrailer, component: trailerDialog } = useTrailerDialog();
  const { starredIds } = useSelector((state) => state.starred);
  const { watchLaterIds } = useSelector((state) => state.watchLater);

  const isStarred = starredIds.includes(movie.id);
  const isWatchLater = watchLaterIds.includes(movie.id);
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : placeholder;

  const onCloseCard = (e) => {
    e.stopPropagation();
    setCardIsOpened(false);
  };

  return (
    <>
      {trailerDialog}
      <div className="wrapper">
        <div
          className={cx("card", { opened: cardIsOpened })}
          onClick={() => setCardIsOpened(true)}
        >
          <div className="card-body text-center">
            <div className="overlay" />
            <div className="info_panel">
              <div className="overview">{movie.overview}</div>
              <div className="year">{movie.release_date?.substring(0, 4)}</div>
              <MovieActions
                isStarred={isStarred}
                isWatchLater={isWatchLater}
                movieId={movie.id}
                onViewTrailer={viewTrailer}
              />
            </div>
            <img className="center-block" src={poster} alt={`Poster for ${movie.title}`}/>
          </div>
          <h6 className="title mobile-card">{movie.title}</h6>
          <h6 className="title">{movie.title}</h6>
          <button type="button" className="close" onClick={onCloseCard} aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </>
  );
};

export { Movie };
