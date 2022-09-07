import { useState } from 'react';

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
      <form onSubmit={handleSubmit}>
        <input
          className="block w-full items-center p-1 border-1 border-neutral-50 rounded"
          type="text"
          placeholder="Search for grants…"
          value={query}
          onChange={handleChange}
        />
        <button className='block w-full bg-primary-500 text-white p-1 rounded' type='submit'>Search</button>
      </form>
    </section>
  )
}