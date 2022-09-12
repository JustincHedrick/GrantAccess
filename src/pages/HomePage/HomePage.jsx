// import { useNavigate } from 'react-router-dom';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Header from '../../components/Header/Header'
// import AboutUs from '../../components/AboutUs/AboutUs'
import "./HomePage.css";
// import Volunteer from '../../components/Volunteer/Volunteer';

export default function HomePage() {


  return(
    <div className='flex flex-col gap-12 pt-12'>
      <Header />
      <HowItWorks />
    </div>
  )
}