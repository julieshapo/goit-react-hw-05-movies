import { MovieItem } from 'components/MovieItem/MovieItem';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/moviesAPI';

import { BackLink, Container } from 'pages/MovieDetails.styled';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [selectedMovie, setSelectedMovie] = useState();
  const [isLoading, setIsLoading] = useState({});

  const location = useLocation();
  // console.log(location);
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  // console.log(backLinkLocationRef);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async movieId => {
      try {
        setIsLoading(true);
        const movieDetails = await getMovieDetails(movieId);
        setSelectedMovie(movieDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie(movieId);
  }, [movieId]);

  return (
    <Container>
      <BackLink to={backLinkLocationRef.current}>Back to Movies</BackLink>
      {isLoading ? <p>LOADING...</p> : <MovieItem item={selectedMovie} />}

      <ul>
        <li>
          <Link to="cast">Watch casting</Link>
        </li>
        <li>
          <Link to="reviews">Watch reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
