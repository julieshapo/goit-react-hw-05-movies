import { useState, useEffect } from 'react';
import { getMoviesBySearch } from '../services/moviesAPI';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  // console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  // console.log(search);

  const handleSubmit = e => {
    e.preventDefault();

    if (search === '') {
      alert('Please enter movie name');
      return;
    }

    setSearchParams({ search: e.target.elements.search.value });
    e.target.reset();
  };

  useEffect(() => {
    if (!search) return;

    const getMovies = async name => {
      try {
        setIsLoading(true);
        const movies = await getMoviesBySearch(name);
        setMovies([...movies]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies(search);
  }, [search]);

  return (
    <main>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading ? (
        <p>'LOADING...'</p>
      ) : (
        <MoviesList movies={movies} state={{ from: location }} />
      )}
    </main>
  );
};

export default Movies;

// const onInputChange = e => setSearchParams({ search: e.target.value });
