export const MovieItem = ({
  item: {
    original_title,
    release_date,
    poster_path,
    genres,
    overview,
    vote_average,
  },
}) => {
  const releaseDate = new Date(release_date).getFullYear();

  const image = `https://image.tmdb.org/t/p/w350/${poster_path}`;

  const score = `${(vote_average * 10).toFixed(0)}%`;

  return (
    <div>
      <img src={image} alt={original_title} width="320" />
      <h1>
        {original_title} ({releaseDate})
      </h1>
      <p>User score: {score}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>{genres.map(genre => genre.name).join(',')}</p>
    </div>
  );
};
