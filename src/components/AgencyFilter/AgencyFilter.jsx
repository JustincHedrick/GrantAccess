export default function AgencyFilter({ grants, filters, setFilters }) {
  // Get all unique agencies from grants
  const agencies = grants.reduce((set, grant) => (set.add(grant.parent_agency_name), set), new Set());

  function handleChange(evt) {
    const hasAgency = filters.agencyFilters.has(evt.target.name);
    console.log(hasAgency);
    if (evt.target.checked && !hasAgency) {
      setFilters({ ...filters, agencyFilters: filters.agencyFilters.add(evt.target.name) });
    }
    else if (!evt.target.checked && hasAgency) {
      setFilters({ ...filters, agencyFilters: (filters.agencyFilters.delete(evt.target.name), filters.agencyFilters) });
    }
  }

  return (
    <section className="rounded border-1 border-neutral-50 px-2 pb-4">
      <h2 className="text-2xl font-semibold mb-2 pt-2">Agency</h2>
      {[...agencies].map((agency, index) => (
        <div key={index} className="flex gap-2 align-middle mb-2 last:mb-0">
          <input onChange={handleChange} type="checkbox" name={agency} />
          <label className='leading-tight' htmlFor={agency}>{agency}</label>
        </div>
      ))}
    </section>
  )
}