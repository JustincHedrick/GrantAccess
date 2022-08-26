import { useState, useNavigate } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../Authpage/AuthPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import GrantsPage from '../GrantsPage/GrantsPage';
import EditProfile from '../EditProfile/EditProfile';
import Chat from '../Chat/Chat'
import Footer from '../../components/Footer/Footer'
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
// redid app.jsx to render nav and home page. I think it works well but may not be best solution
  return (
    <>
 <main className="App">
   {/* <AuthPage /> */}
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/" element={<HomePage user={user} />} />
            <Route path="/grants" element={<GrantsPage  user={user} />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </>
        :
        // changed non-users to see home page and brought in nav-bar - go crazy - try to style like wireframes
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<AuthPage setUser={setUser} />} />
            <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
          </Routes>
        </>
      }
      <br></br>
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
      