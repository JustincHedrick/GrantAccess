import { useState } from "react";
import GrantsSearchBar from "../GrantsSearchBar/GrantsSearchBar";
import Slider from '@mui/material/Slider';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export default function GrantsAgenciesAside({ grants, setGrantsCopy, agencyFilters, setAgencyFilters, query, setQuery, handleSearch, funding, setFunding, fundingOptions }) {

  // Get all unique agencies from grants
  const agencies = grants.reduce((set, grant) => (set.add(grant.AgencyName), set), new Set());

  const handleSliderChange = (event, newValue) => {
    setFunding([...newValue]);
  };

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
      <section className="rounded border-1 border-neutral-50 px-2 pb-4 mb-8">
        <h2 className="text-2xl font-semibold mb-2 pt-2">Agency</h2>
        {[...agencies].map((agency) => (
          <div className="flex gap-2 align-middle mb-2 last:mb-0">
            <input onChange={handleChange} type="checkbox" name={agency} id="" />
            <label className='leading-tight' htmlFor={agency}>{agency}</label>
          </div>
        ))}
      </section>
      <section className="rounded border-1 border-neutral-50 px-2 pb-4">
        <h2 className="text-2xl font-semibold mb-2 pt-2">Funding Amount</h2>
        <section className="px-6">
          <Slider
            min={fundingOptions[0]}
            step={fundingOptions[2]}
            max={fundingOptions[1]}
            getAriaLabel={() => 'Funding range'}
            value={funding}
            onChange={handleSliderChange}
            // valueLabelDisplay="auto"
            // getAriaValueText={valuetext}
            // className={'text-primary-50'}
            sx={{
              color: '#23BD8B',
              '& .MuiSlider-thumb': {
                backgroundColor: '#0F382A'
              },
              '& .MuiSlider-rail': {
                backgroundColor: '#C6DED6'
              }
            }}
          />
          <section className="flex justify-between text-shade-1">
            <p>{currencyFormatter.format(funding[0])}</p>
            <p>{currencyFormatter.format(funding[1])}</p>
          </section>
        </section>
      </section>
    </aside>
  )
}