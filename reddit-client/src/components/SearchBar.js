import React from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm, setFilterCategory } from "../redux/postSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search posts..."
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
      <select onChange={(e) => dispatch(setFilterCategory(e.target.value))}>
        <option>All</option>
        <option>React</option>
        <option>Redux</option>
        <option>CSS</option>
      </select>
    </div>
  );
};

export default SearchBar;
