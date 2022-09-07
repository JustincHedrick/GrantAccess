import React from 'react';
import {useState, useEffect, useLayoutEffect} from 'react'
import GrantCards from '../../components/GrantCards/GrantCards'
import Pagination from '../../components/Pagination/Pagination';
import * as grantsApi from "../../utilities/grants-api";
import './GrantsPage.css';

export default function GrantsPage({user}) {
    const [grants, setGrants] = useState([]);
    
    useLayoutEffect(() => {
    getGrants()
    }, []);

console.log(grants)
  async function getGrants() {
      const theGrants = await grantsApi.getGrants();
      setGrants(theGrants);
  }

    return(
    <>
    
    <GrantCards grants={grants} setGrants={setGrants} user={user}/>
    <Pagination />
    </>
    )


}
