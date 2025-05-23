import debounce from "lodash.debounce";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import {
  fetchMovies,
  MODES,
  searchMovies as searchMoviesAction,
} from "../../data/moviesSlice";
import { MoviesGrid } from "../../features/movies/MoviesGrid";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import "./main.scss";

const SEARCH_DEBOUNCE_MS = 300;

const Main = () => {
  const { data, page, pages, fetchStatus, mode } = useSelector(
    (state) => state.movies
  );
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  const moviesGridBottomRef = useRef(null);

  const canScroll = useMemo(
    () => data.length > 0 && page < pages && fetchStatus !== "loading",
    [data.length, page, pages, fetchStatus]
  );

  const onSearchMovies = useMemo(
    () =>
      debounce(
        ({ query, page }) => dispatch(searchMoviesAction({ query, page })),
        SEARCH_DEBOUNCE_MS
      ),
    [dispatch]
  );

  const onDiscoverMovies = useCallback(
    ({ page }) => dispatch(fetchMovies({ page })),
    [dispatch]
  );

  useIntersectionObserver(moviesGridBottomRef, () =>
    mode === MODES.DISCOVER
      ? onDiscoverMovies({ page: page + 1 })
      : onSearchMovies({ query: searchQuery, page: page + 1 })
  );

  useEffect(() => {
    if (searchQuery === null || searchQuery === "") {
      onDiscoverMovies({ page: 1 });
    } else {
      onSearchMovies({ query: searchQuery, page: 1 });
    }
  }, [searchQuery, onSearchMovies, onDiscoverMovies]);

  return (
    <>
      <MoviesGrid movies={data} data-testid="movies" />
      {canScroll && <div ref={moviesGridBottomRef} />}
    </>
  );
};

export { Main };
