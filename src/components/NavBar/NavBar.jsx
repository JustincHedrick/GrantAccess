import { Link } from 'react-router-dom';
import {useState} from 'react';
import * as grantsApi from "../../utilities/grants-api";
import { BeakerIcon, ChatIcon, CogIcon, InboxIcon, UserCircleIcon } from '@heroicons/react/solid'
import * as userService from '../../utilities/users-service';
import { Dropdown } from 'flowbite-react';
import './NavBar.css'
// import { RiMessage2Line } from "react-icons/ri";



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
<button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 shadow-xl"><a href="/grants">Find Grants</a></button>
<button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 shadow-xl">Find Guides</button>
      
{/*chat  */}

<a href='/chat'>
<button class="inline-block relative">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
</button>
</a>


{/* Alert */}
    <button class="inline-block relative">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span class="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
    </button>
 



<Dropdown label="dropdown">

  <Dropdown.Header >

    <span className="block text-sm font-medium truncate">
      {user.email}
    </span>
    <span className="block text-sm font-medium truncate">
      {user.firstName}
    </span>
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