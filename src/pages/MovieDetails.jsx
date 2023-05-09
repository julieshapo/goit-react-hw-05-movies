import { Link } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <div>
      <p>MovieDetails</p>
      <ul>
        <li>
          <Link to="cast">you can see casting</Link>
        </li>
        <li>
          <Link to="reviews">you can see reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieDetails;
