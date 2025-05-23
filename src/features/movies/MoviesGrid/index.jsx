import { Movie } from '../Movie';
import s from './styles.module.scss';

const MoviesGrid = ({ movies = [], ...restProps }) => (
  <div className={s.grid} {...restProps}>
    {movies.map((movie) => (
      <Movie key={movie.id} movie={movie} />
    ))}
  </div>
);

export { MoviesGrid };
