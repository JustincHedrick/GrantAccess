import { useState } from 'react';

export default function GrantsSearchBar({ query, setQuery, agencyFilters, handleSearch }) {

  function handleChange(evt) {
    console.log(evt.currentTarget.value);
    setQuery(evt.currentTarget.value);
  }

  return (
    <section>
      <input
        className="block w-full items-center p-1 border-2 border-neutral-200 rounded"
        type="text"
        placeholder="Search for grants…"
        value={query}
        onChange={handleChange}
      />
      <button className='block w-full bg-green-900 text-white p-1 rounded' onClick={() => handleSearch(query, agencyFilters)}>Search</button>
    </section>
  )
}