import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../state/store/search/searchSlice';
import { RootState } from '../../state/store/store';
import './Search.scss';

function Search() {
  const dispatch = useDispatch();
  const { search } = useSelector((state: RootState) => state.search);
 
  const handleChange = (e: any) => {
    dispatch(setSearch(e.target.value))
  }
  
  return (
    <input 
      className="search"
      placeholder="Search by name..."
      type="search"
      value={search}
      onChange={handleChange}
    >
      
    </input>
  );
}

export default Search;