import Fuse from 'fuse.js';
import { useState, useEffect } from 'react';
import GrantsList from '../../components/GrantsList/GrantsList';
import GrantsAgenciesAside from '../../components/GrantsAgenciesAside/GrantsAgenciesAside';
import ResultsBar from '../../components/ResultsBar/ResultsBar';
import SORTING_KEYS from './SortingKeys';
import searchOptions from './FuseSettings';
import * as grantsAPI from '../../utilities/grants-api';
import './GrantsPage.css';

export default function GrantsPage({ user, grants, grantsCopy, setGrantsCopy, setGrants }) {
    const FUNDING_MAX = 10000000;
    const FUNDING_MIN = 0;
    const INCREMENT = 100000;

    const [agencyFilters, setAgencyFilters] = useState([]);
    const [funding, setFunding] = useState([FUNDING_MIN, FUNDING_MAX]);
    const [matchingRequirements, setMatchingRequirements] = useState('no');
    const [availabilityRange, setAvailabilityRange] = useState([undefined, undefined]);
    const [sortKey, setSortKey] = useState('');
    const [finalQuery, setFinalQuery] = useState('');

    function processGrants(user, grants) {
        return grants.map((grant) => {
            const userSet = new Set([...grant.users]);
            grant.isSaved = userSet.has(user._id);
            return grant;
        });
    }

    useEffect(() => {
        if (grants.length > 0) return;
        const getGrants = async () => {
            let grants = await grantsAPI.getGrants();
            grants = processGrants(user, grants);
            setGrants(grants);
            setGrantsCopy(grants);
        }
        getGrants();
    }, []);

    useEffect(() => {
        handleSort();
    }, [sortKey])

    useEffect(() => {
        function handleSearch() {
            const filterSet = new Set([...agencyFilters]);
            const searchResults = fuse.search(finalQuery);
            let grantResults = finalQuery ? searchResults.map((result) => result.item) : grants;
            if (filterSet.size > 0) {
                grantResults = grantResults.filter((grant) => (filterSet.has(grant.parent_agency_name)) && (grant.AwardCeiling >= funding[0] && grant.AwardCeiling <= funding[1]));
            }
            grantResults = grantResults.filter((grant) => (grant.AwardCeiling >= funding[0] && (funding[1] === FUNDING_MAX || grant.AwardCeiling <= funding[1])));
            if (matchingRequirements === 'yes') {
                grantResults = grantResults.filter((grant) => grant.CostSharingOrMatchingRequirement.toLowerCase() === 'yes');
            }
            if (availabilityRange[0] || availabilityRange[1]) {
                grantResults = grantResults.filter((grant) => {
                    const startDate = availabilityRange[0] ? Date.parse(availabilityRange[0]) : -Infinity;
                    const endDate = availabilityRange[1] ? Date.parse(availabilityRange[1]) : Infinity;
                    // console.log(startDate, endDate);
                    return ((startDate <= Date.parse(grant.PostDate)) && (Date.parse(grant.CloseDate) <= endDate));
                });
            }
            setGrantsCopy(grantResults);
            setSortKey('postDate');
        }
        handleSearch();
    }, [finalQuery, agencyFilters, funding, matchingRequirements, availabilityRange]);

    const fuse = new Fuse(grants, searchOptions);

    function handleSort() {
        if (!sortKey) return;
        const propertyName = SORTING_KEYS.get(sortKey);
        const sortedGrantsCopy = [...grantsCopy].sort((a, b) => propertyName.cleanValue(a[propertyName.propertyName]) < propertyName.cleanValue(b[propertyName.propertyName]) ? -1 : 1);
        setGrantsCopy(sortedGrantsCopy);
    }

    return (
        <main className='GrantsPage py-8 px-4'>
            <h1 className='text-4xl font-bold mb-8'>Find Grants</h1>
            <div className='grid grid-cols-[minmax(0,_2fr)_minmax(0,_5fr)] gap-24'>
                <GrantsAgenciesAside
                    setGrantsCopy={setGrantsCopy}
                    grants={grants}
                    agencyFilters={agencyFilters}
                    setAgencyFilters={setAgencyFilters}
                    setFinalQuery={setFinalQuery}
                    funding={funding}
                    setFunding={setFunding}
                    fundingOptions={[FUNDING_MIN, FUNDING_MAX, INCREMENT]}
                    matchingRequirements={matchingRequirements}
                    setMatchingRequirements={setMatchingRequirements}
                    availabilityRange={availabilityRange}
                    setAvailabilityRange={setAvailabilityRange}
                />
                <section>
                    <ResultsBar
                        grantsCopy={grantsCopy}
                        sortingKeys={SORTING_KEYS}
                        setSortKey={setSortKey}
                        sortKey={sortKey}
                    />
                    <GrantsList user={user} grantsCopy={grantsCopy} setGrantsCopy={setGrantsCopy} grants={grants} setGrants={setGrants} />
                </section>
            </div>
        </main>
    )
}