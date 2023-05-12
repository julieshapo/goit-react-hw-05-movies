import { MovieItem } from 'components/MovieItem/MovieItem';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/moviesAPI';
import { ThreeCircles } from 'react-loader-spinner';
import { Loader } from 'components/SharedLayout/SharedLayout.styled';
import { BackLink, Container } from 'pages/MovieDetails.styled';

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
      <Suspense
        fallback={
          <Loader>
            <ThreeCircles
              height="80"
              width="80"
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </Loader>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
