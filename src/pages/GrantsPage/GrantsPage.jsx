import React from 'react';
import GrantCards from '../../components/GrantCards/GrantCards'
import Pagination from '../../components/Pagination/Pagination';
import './GrantsPage.css';

export default function GrantsPage({grants, setGrants}) {

    return(
    <>
    
    <GrantCards grants={grants} setGrants={setGrants}/>
    <Pagination />
    </>
    )


}
