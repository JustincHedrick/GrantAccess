export default function AgencyFilter({ grants, agencyFilters, setAgencyFilters }) {
  // Get all unique agencies from grants
  const agencies = grants.reduce((set, grant) => (set.add(grant.AgencyName), set), new Set());

  function handleChange(evt) {
    const agencyIndex = agencyFilters.indexOf(evt.target.name);
    if (evt.target.checked && agencyIndex === -1) {
      setAgencyFilters([...agencyFilters, evt.target.name]);
    }
    else if (!evt.target.checked && agencyIndex > -1) {
      setAgencyFilters(agencyFilters.filter((_, idx) => idx !== agencyIndex));
    }
  }

  return (
    <section className="rounded border-1 border-neutral-50 px-2 pb-4 mb-8">
      <h2 className="text-2xl font-semibold mb-2 pt-2">Agency</h2>
      {[...agencies].map((agency) => (
        <div className="flex gap-2 align-middle mb-2 last:mb-0">
          <input onChange={handleChange} type="checkbox" name={agency} id="" />
          <label className='leading-tight' htmlFor={agency}>{agency}</label>
        </div>
      ))}
    </section>
  )
}