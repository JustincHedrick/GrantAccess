import GrantsSearchBar from "../GrantsSearchBar/GrantsSearchBar";

export default function GrantsAgenciesAside({ grants, setGrantsCopy }) {
  // Get all unique agencies from grants
  const agencies = grants.reduce((set, grant) => (set.add(grant.AgencyName), set), new Set());

  return (
    <aside>
      <GrantsSearchBar grants={grants} setGrantsCopy={setGrantsCopy} />
      <section className="rounded border-2 border-neutral-200 p-1">
        <h2 className="text-2xl">Agency</h2>
        {[...agencies].map((agency) => (
          <div className="">
            <input type="checkbox" name={agency} id="" />
            <label htmlFor={agency}>{agency}</label>
          </div>
        ))}
      </section>
    </aside>
  )
}