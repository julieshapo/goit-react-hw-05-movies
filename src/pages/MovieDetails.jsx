import { MovieItem } from 'components/MovieItem/MovieItem';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/moviesAPI';

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [isLoading, setIsLoading] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async movieId => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setSelectedMovie(movieDetails);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    getMovie(movieId);
  }, [movieId]);

  return (
    <div>
      <p>movieId: {movieId}</p>
      {/* {movieId && <MovieItem item={selectedMovie} />} */}
      <ul>
        <li>
          <Link to="cast">you can see casting</Link>
        </li>
        <li>
          <Link to="reviews">you can see reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
