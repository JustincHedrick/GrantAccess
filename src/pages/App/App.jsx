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

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </>
        :
        // changed non-users to see home page and brought in nav-bar - go crazy - try to style like wireframes
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/sign-up" element={<AuthPage setUser={setUser}/>} />
            <Route path="/login" element={<AuthPage />} />
          </Routes>
        </>
      }
    </main>
  );
}

export default App;