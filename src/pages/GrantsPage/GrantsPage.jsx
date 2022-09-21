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

    const fuse = new Fuse(grants, searchOptions); // Create new fuse object for searching

    const [sortKey, setSortKey] = useState('');
    const [filters, setFilters] = useState({
        agencyFilters: new Set(),
        funding: [FUNDING_MIN, FUNDING_MAX],
        matchingRequirements: 'no',
        availabilityRange: [undefined, undefined],
        sortKey: 'postDate',
        finalQuery: ''
    });

    function applySavedProperty(user, grants) {
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
            grants = applySavedProperty(user, grants);
            setGrants(grants);
            setGrantsCopy(grants);
        }
        getGrants();
    }, []);

    useEffect(() => {
        const sortGrants = () => {
            if (!sortKey) return;
            const propertyName = SORTING_KEYS.get(sortKey);
            const sortedGrantsCopy = [...grantsCopy].sort((a, b) => {
                return propertyName.cleanValue(a[propertyName.propertyName]) < propertyName.cleanValue(b[propertyName.propertyName]) ? -1 : 1
            });
            setGrantsCopy(sortedGrantsCopy);
        }
        sortGrants();
    }, [sortKey])

    useEffect(() => {
        const applyFilters = () => {
            const searchResults = fuse.search(filters.finalQuery);

            // Search Query Filter - Fuzzy Search With Fuse.js
            let grantResults = filters.finalQuery ? searchResults.map((result) => result.item) : grants;

            // Agency Filter
            const agencyFilters = filters.agencyFilters;
            if (agencyFilters.size > 0) {
                grantResults = grantResults.filter((grant) => agencyFilters.has(grant.parent_agency_name));
            }

            // Matching Requirements Filter
            if (filters.matchingRequirements === 'yes') {
                grantResults = grantResults.filter((grant) => grant.CostSharingOrMatchingRequirement.toLowerCase() === 'yes');
            }

            // Post Date and Close Date Filter
            const availabilityRange = filters.availabilityRange;
            if (availabilityRange[0] || availabilityRange[1]) {
                grantResults = grantResults.filter((grant) => {
                    const startDate = availabilityRange[0] ? Date.parse(availabilityRange[0]) : -Infinity;
                    const endDate = availabilityRange[1] ? Date.parse(availabilityRange[1]) : Infinity;
                    return ((startDate <= Date.parse(grant.PostDate)) && (Date.parse(grant.CloseDate) <= endDate));
                });
            }

            // Funding Amount Filter - Will always be applied
            // If grant funding is much greater than max slider value, it will also be included
            const funding = filters.funding;
            grantResults = grantResults.filter((grant) => {
                return (grant.AwardCeiling >= funding[0] && (funding[1] === FUNDING_MAX || grant.AwardCeiling <= funding[1]))
            });

            setGrantsCopy(grantResults);
        }
        applyFilters();
    }, [filters]);

    return (
        <main className='GrantsPage py-8 px-4'>
            <h1 className='text-4xl font-bold mb-8'>Find Grants</h1>
            <div className='grid grid-cols-[minmax(0,_2fr)_minmax(0,_5fr)] gap-24'>
                <GrantsAgenciesAside
                    grants={grants}
                    filters={filters}
                    setFilters={setFilters}
                    fundingOptions={[FUNDING_MIN, FUNDING_MAX, INCREMENT]}
                />
                <section>
                    <ResultsBar
                        grantsCopy={grantsCopy}
                        sortingKeys={SORTING_KEYS}
                        setSortKey={setSortKey}
                        sortKey={sortKey}
                    />
                    <GrantsList
                        user={user}
                        grantsCopy={grantsCopy}
                        setGrantsCopy={setGrantsCopy}
                        grants={grants}
                        setGrants={setGrants}
                    />
                </section>
            </div>
        </main>
    )
}