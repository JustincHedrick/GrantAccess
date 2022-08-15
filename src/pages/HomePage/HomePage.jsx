// import { checkToken } from '../../utilities/users-service'
// import NavBar from '../../components/NavBar/NavBar';
// not a lot done here just added the h1 so I could see it was working

import "./HomePage.css";

export default function HomePage() {
  return(
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div id="Section1">
      <div id="section1">
        <h1 id="test">Find expert guidance on Environmental Grants</h1>
        <div id="text">
          Some sort of description will be here.
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
        </div>
        <div id="btns">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded ">Learn More</button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded">SIGN UP!</button>
        </div>
      </div>
    </div>

    <br></br>

    <div id="Section2">
      <div id="Lbox1">
        <h1>Have Experience?</h1>
      <div id="btns">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded ">Learn More</button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded">SIGN UP!</button>
        </div>
      </div>
      <div id="Rbox2">
        <h1>I dont know what is going here</h1>
      </div>
    </div>

    <br></br>
    <br></br>

    <h1 id="HIW-title">How It Works</h1>
    <div id="HIW">
      <div id="step">
        <h3>Step 1</h3>
        <div id="mid-box"></div>
      </div>

      <div id="step">
        <h3>Step 2</h3>
        <div id="mid-box"></div>
      </div>

      <div id="step">
        <h3>Step 3</h3>
        <div id="mid-box"></div>
      </div>
    </div>
    </>
  )
}