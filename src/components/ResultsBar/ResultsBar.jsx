export default function ResultsBar({ grantsCopy, sortingKeys, setSortKey, sortKey }) {
  function handleSortChange(evt) {
    setSortKey(evt.target.value);
  }
  
  return (
    <section className='flex items-center justify-between mb-4'>
      <p className='text-2xl font-semibold'>{grantsCopy.length} results found</p>
      <section className='flex items-center gap-4' onChange={handleSortChange} value={sortKey}>
        <p className='text-2xl font-semibold'>Sort By</p>
        <select className='border-1 border-neutral-300 rounded' name="sort" value={sortKey}>
          {[...sortingKeys.keys()].map((key) => (
            <option className='' value={key}>{sortingKeys.get(key).dropDownTitle}</option>
          ))}
        </select>
      </section>
    </section>
  )
}