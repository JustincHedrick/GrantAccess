import { useState, useNavigate, useEffect, } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../Authpage/AuthPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import GrantsPage from '../GrantsPage/GrantsPage';
import EditProfile from '../EditProfile/EditProfile';
import AboutUsPage from '../AboutUs/AboutUsPage';
import Chat from '../Chat/Chat'
import GrantDetailPage from '../GrantDetailPage/GrantDetailPage';
import Footer from '../../components/Footer/Footer'
import FaqPage from '../Faq/FaqPage'
import FindGuide from '../FindGuide/FindGuide';
import * as grantsApi from "../../utilities/grants-api";
import * as userApi from "../../utilities/users-api"
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [grants, setGrants] = useState([]);
  const [grantsCopy, setGrantsCopy] = useState(grants);
  const [guides, setGuides] = useState([]);

  grants.forEach(grant => console.log(grant.CostSharingOrMatchingRequirement));

  function processGrants(user, grants) {
    return grants.map((grant) => {
      const userSet = new Set([...grant.users]);
      grant.isSaved = userSet.has(user._id);
      return grant;
    });
  }

  useEffect(() => {
    const getGrants = async () => {
      let grants = await grantsApi.getGrants();
      grants = processGrants(user, grants);
      setGrants(grants);
      setGrantsCopy(grants);
    }
    getGrants();
  }, []);
  // redid app.jsx to render nav and home page. I think it works well but may not be best solution

  useEffect(() => {
    const getGuides = async () => {
      let guides = await userApi.getGuides();
      console.log(guides)
      setGuides(guides);
    }
    getGuides();
    
  }, [])

  return (
    <>
      <main className="App">
        {/* <AuthPage /> */}
        {user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <div className='container-wrapper px-4'>
              <Routes>
                {/* Route components in here */}
                <Route path="/profile" element={<ProfilePage user={user} />} />
                <Route path="/" element={<HomePage user={user} />} />
                <Route path="/grants" element={<GrantsPage user={user} grants={grants} grantsCopy={grantsCopy} setGrantsCopy={setGrantsCopy} setGrants={setGrants} />} />
                <Route path='/grants/:grantId' element={<GrantDetailPage user={user} grants={grants} grantsCopy={grantsCopy} setGrantsCopy={setGrantsCopy} setGrants={setGrants} />} />
                <Route path="/editprofile" element={<EditProfile />} />
                <Route path="/chat" element={<Chat user={user} grants={grants} />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/findguide" element={<FindGuide user={user} guides={guides}/>} />
                
              </Routes>
            </div>
          </>
          :
          // changed non-users to see home page and brought in nav-bar - go crazy - try to style like wireframes
          <>
            <NavBar user={user} setUser={setUser} />
            <div className='container-wrapper px-4'>
              <Routes>
                {/* <Route path="/howitworks" element={<HowItWorksPage />}/> */}
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/login" element={<AuthPage setUser={setUser} />} />
                <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
              </Routes>
            </div>
          </>
        }
        <Footer />
      </main>

      {/* <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 . All Rights Reserved.
    </span>
    <div>
      <h1> Hi</h1>
    </div>
    <div>
      <h1> Hi</h1>
    </div>
    <div>
      <h1> Hi</h1>
    </div> */}
      {/* <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>

        <Footer />
    </ul>
</footer> */}
    </>
  );
}

export default App;

// { user ?
//         <>
//           <NavBar user={user} setUser={setUser} />

//         </>
//         :
//         // changed non-users to see home page and brought in nav-bar - go crazy - try to style like wireframes
//         <>
//           <NavBar user={user} setUser={setUser}/>

//         </>
//       }
