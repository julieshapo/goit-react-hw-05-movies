import { useState, useEffect } from 'react';
import { getMoviesBySearch } from '../services/moviesAPI';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;

// const onInputChange = e => setSearchParams({ search: e.target.value });

// onSubmit ={e =>
//   setSearchParams({ search: e.target.elements.search.value })}

// {
//   /* <ul>
//         {movies.map(movie => {
//           return (
//             <li key={movie.id}>
//               <Link to={`${movie}`}>{movie.title}</Link>
//             </li>
//           );
//         })}
//       </ul> */
// }

// {/* <form action="" onSubmit={handleSubmit}>
//   <input
//     type="text"
//     name="search"
//     autoComplete="off"
//     autoFocus
//     placeholder="Enter movie name"
//   />
//   <button type="submit" aria-label="Search movies">
//     Search
//   </button>
// </form> */}
