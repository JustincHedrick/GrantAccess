import { useState } from 'react';
import './GrantsSearchBar.css';

export default function GrantsSearchBar({ query, setQuery, agencyFilters, handleSearch }) {

  function handleChange(evt) {
    console.log(evt.currentTarget.value);
    setQuery(evt.currentTarget.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(query, agencyFilters);
  }

  return (
    <section>
      <form className='relative mb-6' onSubmit={handleSubmit}>
        <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          {/* {Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.} */}
          <path className="fill-neutral-300" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
        </svg>
        <input
          className="block w-full items-center py-1 pr-1 pl-8 border-1 border-neutral-50 rounded"
          type="text"
          placeholder="Search for grants…"
          value={query}
          onChange={handleChange}
        />
        <button className='block w-full bg-primary-500 text-white p-1 rounded hidden' type='submit'>Search</button>
      </form>
    </section>
  )
}