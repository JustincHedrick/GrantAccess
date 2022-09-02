import { Link } from 'react-router-dom';
import {useState} from 'react';
import * as grantsApi from "../../utilities/grants-api";
import { BeakerIcon, ChatIcon, CogIcon, UserCircleIcon } from '@heroicons/react/solid'
import * as userService from '../../utilities/users-service';


export default function NavBar({user, setUser}) {
  
//  This may have to change, its the best way I thought to get links for users and non users in the navbar, feel free to change
  let NonUserLinks = [
    {name:"HOME", link:"/", icon: <BeakerIcon className="h-5 w-5 text-blue-500"/> },
    {name:"HOW IT WORKS", link:"/aboutus", icon: <CogIcon className="h-5 w-5 text-blue-500"/>},
    {name:"LOGIN", link:"/login", icon: "Login"},
    {name:"SIGN-UP", link:"/signup", icon: "Sign-Up"},
  ];
  //  This may have to change, its the best way I thought to get links for users and non users in the navbar, feel free to change
  let UserLinks = [
    {name:"GRANTS", link:"/grants", icon: "Find grants",},
    {name:"FIND A MENTOR", link:"/findamentor", icon: "Find a mentor"},
    {name:"CHAT", link:"/chat", icon: <ChatIcon className="h-5 w-5 text-blue-500"/> },
    {name:"PROFILE", link:"/profile", icon: <UserCircleIcon  className="h-5 w-5 text-blue-500"/>},
    {name:"Log-out", link:"/", icon:"Log-out", onClick: handleLogOut}
  ]

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }


  return (
    <>
    <div className='fixed shadow-md w-full  top-0 left-0'>
      <div className='md:flex lg:flex xl:flex sm:flex bg-white pb-10 items-right justify-between py-4 md:px-10 px-7'>
        <div className='font-bold text=2x1 cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span className='text-3x1 text-indigo-600 mr-1 pt-2'>

          </span>
          <h1 class="text-3xl">
          <a href='/'>Grant Guide </a>
          </h1>
          {/* logo */}
          
          
        </div>
      {user ? 
      <>
        <ul className="md:flex md:items-center">
          {
            UserLinks.map((Link)=> (
              <li key={Link.name} className='md:ml-8 text-xl'>
                <a href={Link.link} className='text-gray-800 hover:text-gray-400 duration-500' onClick={Link.onClick}>
                  {Link.icon} </a>
              </li>
            ))
          }
          {/* dummie logout button > Logout button works <*/}
          {/* <li>
            <a href="/" onClick={handleLogOut}>Log Out</a>
          </li> */}
        </ul>
      </>
      :
      // added functionality for non-users to see a nav bar
      <>
        <ul className="md:flex md:items-center">
          {
            NonUserLinks.map((Link)=>(
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