export default function ResultsBar({ grantsCopy, sortingKeys, setSortKey, sortKey }) {
  function handleSortChange(evt) {
    setSortKey(evt.target.value);
  }

  return (
    <section className='flex items-center justify-between mb-4'>
      <p className='text-2xl font-semibold'>{grantsCopy.length} results found</p>
      <section className='flex items-center gap-4'>
        <p className='text-2xl font-semibold'>Sort By</p>
        <select className='border-1 border-neutral-300 rounded' onChange={handleSortChange} name="sort" value={sortKey}>
          {[...sortingKeys.keys()].map((key, idx) => (
            <option key={idx} value={key}>{sortingKeys.get(key).dropDownTitle}</option>
          ))}
        </select>
      </section>
    </section>
  )
}