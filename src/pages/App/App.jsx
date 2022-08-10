import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../Authpage/AuthPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
// redid app.jsx to render nav and home page. I think it works well but may not be best solution
  return (
    <>
      <div className='pb-12'>
        <NavBar user={user} setUser={setUser} />
      </div>
      <div className="bg-indigo-600 w-full h-screen">
        <HomePage />
        <AuthPage setUser={setUser} />
      </div>
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
      