export const SearchBar = ({ onSubmit }) => {
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Enter movie name"
          autoFocus
          autoComplete="off"
        />
        <button type="submit" aria-label="Search movies">
          Search
        </button>
      </form>
    </div>
  );
};
