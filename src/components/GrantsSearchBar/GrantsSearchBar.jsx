import { useState } from 'react';
import Fuse from 'fuse.js';

export default function GrantsSearchBar({ grants, setGrantsCopy }) {
  const [query, setQuery] = useState('');

  const searchOptions = {
    includeScore: true,
    isCaseSensitive: false,
    shouldSort: true,
    findAllMatches: true,
    keys: [
      {
        name: 'OpportunityTitle',
        weight: 2
      },
      {
        name: 'Description',
        weight: 1
      }
    ]
  };

  const fuse = new Fuse(grants, searchOptions);

  function handleChange(evt) {
    console.log(evt.currentTarget.value);
    setQuery(evt.currentTarget.value);

  }

  function handleSearch() {
    const searchResults = fuse.search(query);
    const grantResults = query ? searchResults.map((result) => result.item) : grants;
    setGrantsCopy(grantResults);
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
    <button className='block w-full bg-green-900 text-white p-1 rounded' onClick={handleSearch}>Search</button>
    </section>
  )
}