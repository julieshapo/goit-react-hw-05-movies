import { Button, Input, SearchBarStyle } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <SearchBarStyle>
      <form action="" onSubmit={onSubmit}>
        <Input
          type="text"
          name="search"
          placeholder="Enter movie name"
          autoFocus
          autoComplete="off"
        />
        <Button type="submit" aria-label="Search movies">
          Search
        </Button>
      </form>
    </SearchBarStyle>
  );
};
