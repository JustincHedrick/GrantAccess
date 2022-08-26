import React from 'react';
import {useState, useEffect} from 'react';
import * as grantsApi from "../../utilities/grants-api";
import './GrantsPage.css';

export default function GrantsPage() {

    const [grants, setGrants] = useState([]);

   
    // async function getGrants() {
    //  const grants = await grantsApi.getGrants();
    //  setGrants(grants);
    //  console.log(grants)
    // }
    
    
    
    function handleClick(){
       console.log("click")
}
async function getGrants() {
    const grants = await grantsApi.getGrants();
    setGrants(grants);
    console.log(grants)
}

function toggleText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var button = document.getElementById("button");

    if (dots.classList.contains("hidden")) {
        // Show the dots
        dots.classList.remove("hidden");

        // Hide the more text
        moreText.classList.add("hidden");

        // change text of the button
        button.innerHTML = "Read more";
    } else {
        // Hide the dots
        dots.classList.add("hidden");

        // hide the more text
        moreText.classList.remove("hidden");

        // change text of the button
        button.innerHTML = "Read less";
    }
}
return (
    <>
    <br></br>
    <br></br>
    <br></br>

    <div>
        {/* <button>CLICK HERE</button> */}
            {
                grants.filter((el, idx) => idx < 10).map((item) => (
                    <>
                    
      <div class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
    {/* <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""> */}
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.OpportunityTitle} ({item.OpportunityID})</h5>
        <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.AgencyName}</h4>


        <label>Description:</label>
        <p className='desc'>
            {item.Description}
</p>
    </div>
        <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.PostDate}</h4>
</div>
    {/* <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"> */}
    {/* <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Post</button>
    </h5> */}
    

    {/* {
            UserLinks.map((Link)=> (
              <li key={Link.name} className='md:ml-8 text-xl'>
                <a href={Link.link} className='text-gray-800 hover:text-gray-400 duration-500' onClick={Link.onClick}>
                  {Link.icon} </a>
              </li>
            ))
          } */}

                    {/* <h4>{item._id}</h4> */}
    {/* <label>{item._id}</label> */}
    {/* <label>Opportunity ID: {item.OpportunityID}</label> */}
    {/* <label>Matching Requirements: {item.MatchingRequirements}</label> */}
    {/* <label>CFDA Number</label> */}
    {/* <label>Description: {item.Description}</label> */}

    {/* <p class="font-normal text-gray-700 dark:text-gray-400">Description of Grant.</p> */}
{/* </a> */}
{/* </div> */}
                    </>
                ))
            }
        <button type="button" onClick={getGrants} handleClick={handleClick}>grant button</button>

    </div>

    
    </>
    )
}