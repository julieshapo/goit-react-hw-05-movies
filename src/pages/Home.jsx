import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/moviesAPI';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const movies = await getTrendingMovies();
        setMovies([...movies]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);
  return (
    <main>
      {isLoading ? (
        <p>LOADING...</p>
      ) : (
        <MoviesList movies={movies} state={{ from: location }} />
      )}
    </main>
  );
};

export default Home;
