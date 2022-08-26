import { useNavigate } from 'react-router-dom';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Header from '../../components/Header/Header'
import AboutUs from '../../components/AboutUs/AboutUs'
import "./HomePage.css";
import Volunteer from '../../components/Volunteer/Volunteer';

export default function HomePage() {
  let navigate = useNavigate()

  return(
    <>
    <Header />


    <hr></hr>

    <HowItWorks />
    <Volunteer />
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

  </div>

    <br></br>
    <br></br>



<AboutUs />

  
    </>
  )
}