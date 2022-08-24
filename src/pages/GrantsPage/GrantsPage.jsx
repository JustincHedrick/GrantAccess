import React from 'react';
import {useState, useEffect} from 'react';
import * as grantsApi from "../../utilities/grants-api";
import './GrantsPage.css';

export default function GrantsPage() {

    const [grants, setGrants] = useState({});

   
    async function getGrants() {
     const grants = await grantsApi.getGrants();
     console.log(grants)
     setGrants(grants);
    }
    

return (
    <>
    <br></br>
    <br></br>
    <br />
    <br />
    <div>
        <button type="button" onClick={getGrants}>grant button</button>
    </div>
    <div className='grants'>

    <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name of Grant 
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Post</button>
    </h5>
    

    <label>Grant Category</label>
    <label>Grant Amount</label>
    <label>Matching Requirements</label>
    <label>CFDA Number</label>

    <p class="font-normal text-gray-700 dark:text-gray-400">Description of Grant.</p>
</a>
</div>

    
    </>
    )
}