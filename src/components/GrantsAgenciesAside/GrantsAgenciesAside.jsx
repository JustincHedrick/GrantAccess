import GrantsSearchBar from "../GrantsSearchBar/GrantsSearchBar";
import AgencyFilter from "../AgencyFilter/AgencyFilter";
import FundingSlider from "../FundingSlider/FundingSlider";

export default function GrantsAgenciesAside({ grants, setGrantsCopy, agencyFilters, setAgencyFilters, query, setQuery, handleSearch, funding, setFunding, fundingOptions }) {
  return (
    <aside>
      <GrantsSearchBar
        query={query}
        setQuery={setQuery}
        agencyFilters={agencyFilters}
        handleSearch={handleSearch}
      />
      <AgencyFilter
        grants={grants}
        agencyFilters={agencyFilters}
        setAgencyFilters={setAgencyFilters}
      />
      <FundingSlider
        fundingOptions={fundingOptions}
        funding={funding}
        setFunding={setFunding}
      />
    </aside>
  )
}