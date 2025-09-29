const Search = ({ handleSearch }) => {
  return (
    <div className="pa3">
      <input
        type="text"
        placeholder="Search by tags..."
        className="pa2 input-reset ba bg-transparent w-100"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;