import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/moviesAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        // setIsLoading(true);
        const movies = await getTrendingMovies();
        setMovies([...movies]);
      } catch (error) {
        console.log(error);
      } finally {
        // setIsLoading(false);
      }
    };

    getMovies();
  }, []);
  return (
    <main>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
