import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchKeyword, searchMovies } from '../features/movieSlice';
import debounce from 'lodash/debounce';

function SearchBar() {
  const dispatch = useDispatch();
  const searchKeyword = useSelector((state) => state.movies.searchKeyword);

  const debouncedSearch = useCallback(
    debounce((keyword) => {
      dispatch(searchMovies(keyword));
    }, 300),
    []
  );

  const handleInputChange = (e) => {
    const keyword = e.target.value;
    dispatch(setSearchKeyword(keyword));
    debouncedSearch(keyword);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Film ara..."
        className="search-bar"
        value={searchKeyword}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
