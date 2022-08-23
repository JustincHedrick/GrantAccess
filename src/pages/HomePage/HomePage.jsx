// import { checkToken } from '../../utilities/users-service'
// import NavBar from '../../components/NavBar/NavBar';
// not a lot done here just added the h1 so I could see it was working
import { useNavigate } from 'react-router-dom';
import "./HomePage.css";

export default function HomePage() {
  let navigate = useNavigate()

  return(
    <>
    <br></br>
    <br></br>

<div id="Section1">
  <div id="section1" class="table items-center bg-white rounded-lg border shadow-md md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img id="image" src="https://i.imgur.com/z2yXt8n.png" alt="forest"/>
      <div className="S1-container">
        <h5 id="HomeName">Find expert guidance on Environmental Grants</h5>
        <p id="desc"> Some sort of description will be here.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Diam commodo augue hendrerit sed justo, venenatis, odio consectetur.
          Some sort of description will be here.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Diam commodo augue hendrerit sed justo, venenatis, odio consectetur.
          Some sort of description will be here.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Diam commodo augue hendrerit sed justo, venenatis, odio consectetur.
          Some sort of description will be here.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Diam commodo augue hendrerit sed justo, venenatis, odio consectetur.
        </p>
          <div id="btn">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded " onClick={() => navigate('/howitworks') }>Learn More</button>
          </div>
      </div>
  </div>
</div>
    <br></br>
    <hr></hr>


{/* Mentor section */}
  <div id="Section2">
      <div id="Lbox1">
        <h1>Have Experience?</h1>
          <p>Volunteer your time as an expert advisor. Help your local and nationwide grant seekers recieve funding for their community.</p>
        <div id="btns">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded" onClick={() => navigate('/howitworks') }>Learn More</button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded" onClick={() => navigate('/signup') }>SIGN UP!</button>
          </div>
      </div>
      <div id="Rbox2">
        <h1>I dont know what is going here</h1>
      </div>
  </div>

    <br></br>
    <br></br>


{/* HOW IT WORKS */}
<h1 id="HIW-title">How It Works</h1>
    <div className="card-container">
  {/* Step One */}
      <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Step One</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Create an account or Log into your account.</p>
          <a href="/signup" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Sign Up
              <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
          <a href="/login" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Login
              <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
      </div>

{/* Step Two */}

    <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Step Two</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Once you've accessed you account, you'll be able to chat with a Mentor volunteers with expert Federal Grant experience.</p>
        <a href="/findamentor" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Find a Mentor
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>

{/* Step Three */}
        <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Step Three</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">You will have access to our chat feature where you can message with a representative with any comments, concerns or questions.</p>
        <a href="/chat" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Chat
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
  </div>
  
    </>
  )
}