import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  const renderSortByOptions = () =>
    Object.keys(sortByOptions).map((sortByOption) => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          onClick={() => handleSortByChange(sortByOptionValue)}
          key={sortByOptionValue}
        >
          {sortByOption}
        </li>
      );
    });

  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) return "active";
    return "";
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = (e) => {
    props.searchYelp(term, location, sortBy);
    e.preventDefault();
    setTerm("");
    setLocation("");
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input
          value={term}
          onChange={handleTermChange}
          placeholder="Search Businesses"
        />
        <input
          value={location}
          onChange={handleLocationChange}
          placeholder="Where?"
        />
      </div>
      <div className="SearchBar-submit">
        <a href="www.#.com" onClick={handleSearch}>
          Let's Go
        </a>
      </div>
    </div>
  );
};

export default SearchBar;
