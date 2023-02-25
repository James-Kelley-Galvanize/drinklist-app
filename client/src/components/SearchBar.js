function SearchBar({ handleSearch, handleSearchChange }) {
  return (
    <div id="search-bar">
      Search:
      <div>
        <input onChange={(e) => handleSearchChange(e.target.value)} />
        <button onClick={() => handleSearch()}>SEARCH</button>
      </div>
    </div>
  );
}

export default SearchBar;
