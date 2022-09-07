import { useState } from "react";
import GrantsSearchBar from "../GrantsSearchBar/GrantsSearchBar";

export default function GrantsAgenciesAside({ grants, setGrantsCopy, agencyFilters, setAgencyFilters, query, setQuery, handleSearch }) {

  // Get all unique agencies from grants
  const agencies = grants.reduce((set, grant) => (set.add(grant.AgencyName), set), new Set());

  function handleChange(evt) {
    console.log(evt.target.checked, evt.target.name);
    const agencyIndex = agencyFilters.indexOf(evt.target.name);
    console.log(agencyIndex);
    if (evt.target.checked && agencyIndex === -1) {
      setAgencyFilters([...agencyFilters, evt.target.name]);
    }
    else if (!evt.target.checked && agencyIndex > -1) {
      setAgencyFilters(agencyFilters.filter((_, idx) => idx !== agencyIndex));
    }
  }

  return (
    <aside>
      <GrantsSearchBar query={query} setQuery={setQuery} agencyFilters={agencyFilters} handleSearch={handleSearch} />
      <section className="rounded border-2 border-neutral-200 p-1">
        <h2 className="text-2xl">Agency</h2>
        {[...agencies].map((agency) => (
          <div className="">
            <input onChange={handleChange} type="checkbox" name={agency} id="" />
            <label htmlFor={agency}>{agency}</label>
          </div>
        ))}
      </section>
    </aside>
  )
}