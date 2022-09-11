import Fuse from 'fuse.js';
import { useState, useEffect } from 'react';
import GrantsList from '../../components/GrantsList/GrantsList';
import GrantsAgenciesAside from '../../components/GrantsAgenciesAside/GrantsAgenciesAside';
import ResultsBar from '../../components/ResultsBar/ResultsBar';
import SORTING_KEYS from './SortingKeys';
import searchOptions from './FuseSettings';
import './GrantsPage.css';

export default function GrantsPage({ user, grants, grantsCopy, setGrantsCopy, setGrants }) {
    const FUNDING_MAX = 10000000;
    const FUNDING_MIN = 0;
    const INCREMENT = 100000;

    const [agencyFilters, setAgencyFilters] = useState([]);
    const [funding, setFunding] = useState([FUNDING_MIN, FUNDING_MAX]);
    const [sortKey, setSortKey] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        handleSort();
    }, [sortKey])

    useEffect(() => {
        handleSearch(query, agencyFilters);
    }, [agencyFilters, funding]);

    const fuse = new Fuse(grants, searchOptions);

    function handleSearch(query, filters) {
        const filterSet = new Set([...filters]);
        const searchResults = fuse.search(query);
        let grantResults = query ? searchResults.map((result) => result.item) : grants;
        if (filters.length > 0) grantResults = grantResults.filter((grant) => (filterSet.has(grant.AgencyName)) && (grant.AwardCeiling >= funding[0] && grant.AwardCeiling <= funding[1]));
        else grantResults = grantResults.filter((grant) => (grant.AwardCeiling >= funding[0] && grant.AwardCeiling <= funding[1]));
        setGrantsCopy(grantResults);
        setSortKey('postDate');
    }

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
                    query={query}
                    setQuery={setQuery}
                    handleSearch={handleSearch}
                    funding={funding}
                    setFunding={setFunding}
                    fundingOptions={[FUNDING_MIN, FUNDING_MAX, INCREMENT]}
                />
                <section>
                    <ResultsBar
                        grantsCopy={grantsCopy}
                        sortingKeys={SORTING_KEYS}
                        setSortKey={setSortKey}
                        sortKey={sortKey}
                    />
                    <GrantsList user={user} grantsCopy={grantsCopy} setGrantsCopy={setGrantsCopy} grants={grants} setGrants={setGrants}/>
                </section>
            </div>
        </main>
    )
}