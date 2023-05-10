export const SearchBar = ({ onSubmit }) => {
  return (
    <div>
      <form action="" onSubmit={() => onSubmit()}>
        <input
          type="text"
          value="name"
          placeholder="Enter movie name"
          autofocus
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
