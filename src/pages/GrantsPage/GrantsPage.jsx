import Fuse from 'fuse.js';
import { useState, useRef, useEffect } from 'react';
import GrantCards from '../../components/GrantCards/GrantCards'
import GrantsAgenciesAside from '../../components/GrantsAgenciesAside/GrantsAgenciesAside';
import './GrantsPage.css';

export default function GrantsPage({ grants, grantsCopy, setGrantsCopy, setGrants }) {
    const [agencyFilters, setAgencyFilters] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        handleSearch(query, agencyFilters);
    }, [agencyFilters]);

    const searchQuery = useRef('');
    const searchOptions = {
        includeScore: true,
        isCaseSensitive: false,
        shouldSort: true,
        findAllMatches: true,
        keys: [
            {
                name: 'OpportunityTitle',
                weight: 2
            },
            {
                name: 'Description',
                weight: 1
            }
        ]
    };

    const fuse = new Fuse(grants, searchOptions);

    function handleSearch(query, filters) {
        console.log(query);
        console.log(filters);
        const filterSet = new Set([...filters]);
        console.log(filterSet);
        if (searchQuery.current !== query) searchQuery.current = query;
        console.log(searchQuery, )
        const searchResults = fuse.search(query);
        let grantResults = query ? searchResults.map((result) => result.item) : grants;
        if (filters.length > 0) grantResults = grantResults.filter((grant) => filterSet.has(grant.AgencyName));
        setGrantsCopy(grantResults);
    }

    return (
        <div className='GrantsPage p-4'>
            <GrantsAgenciesAside
                setGrantsCopy={setGrantsCopy}
                grants={grants}
                agencyFilters={agencyFilters}
                setAgencyFilters={setAgencyFilters}
                query={query}
                setQuery={setQuery}
                handleSearch={handleSearch} />
            <GrantCards grantsCopy={grantsCopy} />
        </div>
    )
}
