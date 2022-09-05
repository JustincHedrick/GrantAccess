import React from 'react';
import GrantCards from '../../components/GrantCards/GrantCards'
import GrantsSearchBar from '../../components/GrantsSearchBar/GrantsSearchBar';
import Pagination from '../../components/Pagination/Pagination';
import './GrantsPage.css';

export default function GrantsPage({ grants, grantsCopy, setGrantsCopy, setGrants }) {
    return (
        <>
            <GrantsSearchBar grants={grants} setGrantsCopy={setGrantsCopy} />
            <GrantCards grantsCopy={grantsCopy} />
            <Pagination />
        </>
    )


}
