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
  const searchResults = fuse.search(query);
  const grantResults = query ? searchResults.map((result) => result.item) : grants;

  function handleChange(evt) {
    console.log(evt.currentTarget.value);
    setQuery(evt.currentTarget.value);
    console.log(grantResults);
    setGrantsCopy(grantResults);
  }

  return (
    <input className="inline items-center h-8 px-2 border border-gray-500 rounded-sm" type="text" placeholder="Search for grants…" value={query} onChange={handleChange} />
  )
}