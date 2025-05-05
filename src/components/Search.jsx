import React from "react";

const Search = ({ search, setSearch, onSearch }) => {
  return (
    <div className="d-flex mb-4">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-primary" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
