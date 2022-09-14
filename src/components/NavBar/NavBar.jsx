import { Link, useNavigate } from 'react-router-dom';
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
  let navigate = useNavigate();
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
    { name: "FIND A MENTOR", link: "/findguide", icon: "Find a mentor" },
    { name: "CHAT", link: "/chat", icon: <ChatIcon className="h-5 w-5 text-blue-500" /> },
    { name: "PROFILE", link: "/profile", icon: <UserCircleIcon className="h-5 w-5 text-blue-500" /> },
    { name: "Log-out", link: "/", icon: "Log-out", onClick: handleLogOut }
  ]

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
    navigate('/');
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
                <Dropdown color={'transparent'} arrowIcon={false} label={<ProfileIcon />}>
                  <Dropdown.Header >
                    <span className="block text-base font-medium truncate" >
                      Welcome, {user.firstName}
                    </span>
                  </Dropdown.Header>
                  <Dropdown.Item>
                    <Link to={"/profile"}>View My Profile</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to={"/editprofile"}> Account Settings </Link>
                  </Dropdown.Item>

                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogOut}>
                    Log out
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </>
            :
            <>
              <div className="flex items-center gap-4">
                <Link to={'/login'}>
                  <button className='text-primary-500 text-sm font-semibold tracking-widest py-2 px-4 border-2 border-primary-300 hover:bg-primary-500 hover:text-white rounded'>LOG IN</button>
                </Link>
                <Link to={'/signup'}>
                  <button className='text-white bg-primary-500 text-sm font-semibold tracking-widest py-2 px-4 border-2 border-primary-500 hover:bg-shade-0 hover:text-primary-500 rounded'>GET STARTED</button>
                </Link>
              </div>
            </>
          }
        </div>
      </div>
    </>
  );
}