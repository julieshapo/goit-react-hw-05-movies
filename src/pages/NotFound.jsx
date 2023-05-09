import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <p>Page not found</p>
      <Link to="/">Go back to Home page</Link>
    </div>
  );
};

export default NotFound;
