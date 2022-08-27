import './HowItWorks.css'
export default function HowItWorks() {

    return(
        <>
        {/* HOW IT WORKS */}
<h1 id="HIW-title" class="text-green-900 drop-shadow-md">
    Get Started with Grant Guide
</h1>

<div className="card-container" class="flex mb-96 mt-32 h-96 justify-around">

{/* Step One */}
  <div class="p-6 bg-emerald-900 max-w-sm rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
      <a href="#">
          <h5 class="mb-2 text-2xl font-normal tracking-tight text-stone-100 dark:text-white text-center">Sign Up</h5>
      </a>
      <p class="mb-3  font-normal text-stone-100 dark:text-gray-400">
        Create free account in minutes. 
      <br></br>
      <br></br>
      <br></br>
        Get access to a community of grant seekers and grant resources.
      </p>
      {/* <a href="/signup" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Sign Up
          <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </a> */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-32 h-32">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

  </div>

{/* Step Two */}

<div class="p-6 max-w-sm bg-emerald-900 rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-normal tracking-tight text-stone-100 dark:text-white text-center">Find Help</h5>
    </a>
    <p class="mb-3 font-normal text-white dark:text-gray-400">
        Easily search avaliable grants in one place.
    <br></br>
    <br></br>
    <br></br>
    Gain insight into previously funded projects from historical data.    
    </p>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-32 h-32">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

</div>

{/* Step Three */}
    <div class="p-6 max-w-sm bg-emerald-900 rounded-lg border border-gray-200 shadow-lg dark:bg-black-800 dark:border-black-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-normal tracking-tight text-stone-100 dark:text-white text-center">Chat with Guides</h5>
    </a>
    <p class="mb-3 font-normal text-stone-100 dark:text-gray-400">
        Connect with volunteer Guides for insight and advice.
        <br></br>
        <br></br>
        Learn about this grant process from experiencd fellow grant seekers.
        
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-32 h-32">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>

</div>
</div>

        </>
    )
}