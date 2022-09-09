import Fuse from 'fuse.js';
import { useState, useRef, useEffect } from 'react';
import GrantsList from '../../components/GrantsList/GrantsList';
import GrantsAgenciesAside from '../../components/GrantsAgenciesAside/GrantsAgenciesAside';
import './GrantsPage.css';

export default function GrantsPage({ grants, grantsCopy, setGrantsCopy, setGrants }) {
    const FUNDING_MAX = 10000000;
    const FUNDING_MIN = 0;
    const INCREMENT = 100000;

    const SORTING_KEYS = new Map();
    SORTING_KEYS.set('postDate', {
        propertyName: 'PostDate',
        dropDownTitle: 'Post Date',
        isAscending: false,
        cleanValue: (date) => {
            return date ? Date.parse(date) : Infinity;
        }
    });
    SORTING_KEYS.set('closeDate', {
        propertyName: 'CloseDate',
        dropDownTitle: 'Close Date',
        isAscending: false,
        cleanValue: (date) => {
            return date ? Date.parse(date) : Infinity;
        }
    });
    SORTING_KEYS.set('titleA', {
        propertyName: 'OpportunityTitle',
        dropDownTitle: 'Grant Title',
        isAscending: false,
        cleanValue: (title) => {
            return title;
        }
    });

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
        const filterSet = new Set([...filters]);
        if (searchQuery.current !== query) searchQuery.current = query;
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
        console.log(propertyName);
        setGrantsCopy([...grantsCopy].sort((a, b) => propertyName.cleanValue(a[propertyName.propertyName]) < propertyName.cleanValue(b[propertyName.propertyName]) ? -1 : 1));
    }

    function handleSortChange(evt) {
        setSortKey(evt.target.value);
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
                    <section>
                        <section className='flex items-center justify-between mb-4'>
                            <p className='text-2xl font-semibold'>{grantsCopy.length} results found</p>
                            <section className='flex items-center gap-4' onChange={handleSortChange} value={sortKey}>
                                <p className='text-2xl font-semibold'>Sort By</p>
                                <select className='border-1 border-neutral-300 rounded px-2 py-1.5' name="sort" value={sortKey}>
                                    {[...SORTING_KEYS.keys()].map((key) => (
                                        <option value={key}>{SORTING_KEYS.get(key).dropDownTitle}</option>
                                    ))}
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