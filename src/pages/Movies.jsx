import { SearchBar } from 'components/SearchBar/SearchBar';
import { getSearchMovies } from '../services/moviesAPI';
import { useState, useEffect } from 'react';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);
  return (
    <main>
      <SearchBar onSubmit={() => {}} />
    </main>
  );
};

export default Movies;
