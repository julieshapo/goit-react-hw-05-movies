import { Link } from 'react-router-dom';
import { MovieItem } from './MoviesList.styled';

export const MoviesList = ({ movies, state }) => {
  // console.log(movies);
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={state}>
              <p>{movie.title}</p>
            </Link>
          </MovieItem>
        ))}
      </ul>
    </div>
  );
};
