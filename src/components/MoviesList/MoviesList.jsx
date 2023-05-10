import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <Link to={`${item.id}`}>
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
