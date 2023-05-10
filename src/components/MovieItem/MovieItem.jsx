export const MovieItem = ({
  item: { title, poster_path, genre_ids, overview, vote_average },
}) => {
  return (
    <div>
      <img src={poster_path} alt={title} width="320" />
      <h1>{title}</h1>
      <p>User score: {vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>{genre_ids}</p>
    </div>
  );
};
