import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterChange } from 'redux/filterSlice';
import { BsSearch } from 'react-icons/bs';

const Filter = () => {
  const dispatch = useDispatch();

  const setFilter = e => {
    e.preventDefault();
    const value = e.currentTarget.value.toLowerCase();
	 console.log('value', value)

    dispatch(filterChange(value));
  };

  return (
    <div className={css.SearchBar}>
      <input
        type="text"
        placeholder="Find contact"
        name="search"
        className={css.SearchInput}
        onChange={setFilter}
      />
      <button type="submit" className={css.SearchButton}>
        <BsSearch />
      </button>
    </div>
  );
};

export default Filter;
