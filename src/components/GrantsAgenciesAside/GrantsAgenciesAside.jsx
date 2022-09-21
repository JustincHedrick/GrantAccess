import GrantsSearchBar from "../GrantsSearchBar/GrantsSearchBar";
import AgencyFilter from "../AgencyFilter/AgencyFilter";
import FundingSlider from "../FundingSlider/FundingSlider";
import MatchingRequirementsToggle from "../MatchingRequirementsToggle/MatchingRequirementsToggle";
import AvailabilityRange from "../AvailabilityRange/AvailabilityRange";

export default function GrantsAgenciesAside({ grants, fundingOptions, filters, setFilters }) {
  return (
    <aside className='flex flex-col gap-8'>
      <GrantsSearchBar
        filters={filters}
        setFilters={setFilters}
      />
      <AgencyFilter
        grants={grants}
        filters={filters}
        setFilters={setFilters}
      />
      <FundingSlider
        filters={filters}
        setFilters={setFilters}
        fundingOptions={fundingOptions}
      />
      <AvailabilityRange
        filters={filters}
        setFilters={setFilters}
      />
      <MatchingRequirementsToggle
        filters={filters}
        setFilters={setFilters}
      />
    </aside>
  )
}