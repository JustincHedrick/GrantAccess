import React from 'react';
import {useState, useEffect} from 'react';
import * as grantsApi from "../../utilities/grants-api";
import './GrantCards.css'

export default function GrantsPage() {

    const [grants, setGrants] = useState([]);

    
    function handleClick(){
       console.log("click")
}
async function getGrants() {
    const grants = await grantsApi.getGrants();
    setGrants(grants);
    console.log(grants)
}

return(
<>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<input class="inline items-center h-8 px-2 border border-gray-500 rounded-sm" type="search" Placeholder="Search…" />
        <button 
        type="button" 
        onClick={getGrants} 
        handleClick={handleClick}>
            grant button
        </button>
    <div className='grantCards'>

        {grants.filter((el, idx) => idx < 12).map((item) => (
            <>
                        
            <div class="items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
                <div class="justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.OpportunityTitle}({item.OpportunityID}) &nbsp; <a href='#'>hi</a></h5>
                    <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.AgencyName}</h4>


                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Description:</h5>
                    <p id="grant-desc">{item.Description}</p>

                    <a href='/selectedgrant'>Read More</a>
            </div>
                {/* <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.PostDate}</h4> */}
            </div>

            </>
        ))
        }

    </div>
</>
)

}