import { Link } from 'react-router-dom';

export const MoviesList = ({ movies, state }) => {
  // console.log(movies);
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={state}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
