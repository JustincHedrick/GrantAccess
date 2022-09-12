import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as grantsApi from "../../utilities/grants-api";
import { BeakerIcon, ChatIcon, CogIcon, InboxIcon, UserCircleIcon } from '@heroicons/react/solid';
import * as userService from '../../utilities/users-service';
import { Dropdown } from 'flowbite-react';
import './NavBar.css';
import GrantButtons from '../GrantButtons/GrantButtons';
import GrantLogoHeader from '../GrantLogoHeader/GrantLogoHeader';
import MessageButton from '../MessageButton/MessageButton';
import ProfileIcon from '../ProfileIcon/ProfileIcon';
// import { RiMessage2Line } from "react-icons/ri";



export default function NavBar({ user, setUser }) {

  //  This may have to change, its the best way I thought to get links for users and non users in the navbar, feel free to change
  let NonUserLinks = [
    { name: "HOME", link: "/", icon: <BeakerIcon className="h-5 w-5 text-blue-500" /> },
    { name: "HOW IT WORKS", link: "/aboutus", icon: <CogIcon className="h-5 w-5 text-blue-500" /> },
    { name: "LOGIN", link: "/login", icon: "Login" },
    { name: "SIGN-UP", link: "/signup", icon: "Sign-Up" },
  ];
  //  This may have to change, its the best way I thought to get links for users and non users in the navbar, feel free to change
  let UserLinks = [
    { name: "GRANTS", link: "/grants", icon: "Find grants", },
    { name: "FIND A MENTOR", link: "/findamentor", icon: "Find a mentor" },
    { name: "CHAT", link: "/chat", icon: <ChatIcon className="h-5 w-5 text-blue-500" /> },
    { name: "PROFILE", link: "/profile", icon: <UserCircleIcon className="h-5 w-5 text-blue-500" /> },
    { name: "Log-out", link: "/", icon: "Log-out", onClick: handleLogOut }
  ]

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }


  return (
    <>
      <div className='sticky z-10 bg-shade-0 shadow-md w-full border-b-6 border-primary-50 top-0 left-0'>
        <div className='md:flex lg:flex xl:flex sm:flex items-right justify-between py-8 md:px-8 px-8'>
          <div className='flex items-center gap-8'>
            {/* logo */}
            <Link to={'/'}>
              <GrantLogoHeader />
            </Link>
            {user ? <GrantButtons /> : null}
          </div>
          {user ?
            <>
              {/* dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 shadow-xl */}
              <div className='flex items-center gap-6'>
                <MessageButton />

                <Dropdown focus={false} color={'transparent'} arrowIcon={false} label={<ProfileIcon />}>
                  <Dropdown.Header >

                    <span className="block text-base font-medium truncate" >
                      Welcome, {user.firstName}
                    </span>
                    {/* <hr></hr> */}
                    {/* <span className="block text-base font-medium truncate">
                      {user.email}
                    </span> */}
                  </Dropdown.Header>
                  <Dropdown.Item>
                    <a href="/profile">View My Profile</a>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <a href="/editprofile"> Account Settings </a>
                  </Dropdown.Item>

                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogOut}>
                    Log out
                  </Dropdown.Item>
                </Dropdown>
              </div>

              {/* <ul className="md:flex md:items-center"> */}
              {
                // UserLinks.map((Link)=> (

                //   <li key={Link.name} className='md:ml-8 text-xl'>
                //     <a href={Link.link} className='text-gray-800 hover:text-gray-400 duration-500' onClick={Link.onClick}>
                //       {Link.icon} </a>
                //   </li>
                // ))
              }
              {/* dummie logout button > Logout button works <*/}
              {/* <li>
            <a href="/" onClick={handleLogOut}>Log Out</a>
          </li> */}
              {/* </ul> */}
            </>
            :
            // added functionality for non-users to see a nav bar
            <>
              <ul className="md:flex md:items-center">
                {
                  NonUserLinks.map((Link) => (
                    <li key={Link.name} className='md:ml-8 text-xl'>
                      <a href={Link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{Link.icon} </a>
                    </li>
                  ))
                }
              </ul>
            </>
          }
        </div>
      </div>
    </>
  );
}

          // <Routes>
          //   {/* Route components in here */}
          //   <Route path="/profile" element={<ProfilePage />} />
          //   <Route path="/home" element={<HomePage />} />
          // </Routes>

          // <Routes>
          //   <Route path="/home" element={<HomePage />} />
          //   <Route path="/sign-up" element={<AuthPage setUser={setUser}/>} />
          //   <Route path="/login" element={<AuthPage />} />
          // </Routes>