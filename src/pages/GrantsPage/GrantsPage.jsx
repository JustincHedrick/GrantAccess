import Fuse from 'fuse.js';
import { useState, useRef, useEffect } from 'react';
import GrantsList from '../../components/GrantsList/GrantsList';
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

    function handleSearch(query, filters, financial) {
        console.log(query);
        console.log(filters);
        const filterSet = new Set([...filters]);
        console.log(filterSet);
        if (searchQuery.current !== query) searchQuery.current = query;
        console.log(searchQuery)
        const searchResults = fuse.search(query);
        let grantResults = query ? searchResults.map((result) => result.item) : grants;
        if (filters.length > 0) grantResults = grantResults.filter((grant) => filterSet.has(grant.AgencyName));
        setGrantsCopy(grantResults);
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
                    handleSearch={handleSearch} />
                <section>
                    <section>
                        <section className='flex items-center justify-between mb-4'>
                            <p className='text-2xl font-semibold'>{grantsCopy.length} results found</p>
                            <section className='flex items-center gap-4'>
                                <p className='text-2xl font-semibold'>Sort By</p>
                                <select className='border-1 border-neutral-300 rounded px-2 py-1.5' name="cars" id="cars">
                                    <option value="volvo">Relevance</option>
                                    <option value="saab">Alphabetical (A-Z)</option>
                                    <option value="mercedes">Alphabetical (Z-A)</option>
                                    <option value="audi">Grant Funding (High to Low)</option>
                                    <option value="audi">Grant Funding (Low to High)</option>
                                </select>
                            </section>
                        </section>
                    </section>
                    <GrantsList grantsCopy={grantsCopy} />
                </section>
            </div>
        </main>
    )
}