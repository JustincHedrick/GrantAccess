import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
//  This may have to change, its the best way I thought to get links for users and non users in the navbar, feel free to change
  let NonUserLinks = [
    {name:"HOW IT WORKS", link:"/howitworks"},
    {name:"LOGIN", link:"/login"},
    {name:"SIGN-UP", link:"/signup"},
  ];
//  This may have to change, its the best way I thought to get links for users and non users in the navbar, feel free to change
  let UserLinks = [
    {name:"HOME", link:"/"},
    {name:"ABOUT", link:"/aboutus"},
    {name:"GRANTS", link:"/grants"},
    {name:"FIND A MENTOR", link:"/findmentor"},
    {name:"CHAT", link:"/chat"},
  ]

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }


  return (
    <>
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex lg:flex xl:flex sm:flex bg-white items-right justify-between py-4 md:px-10 px-7'>
        <div className='font-bold text=2x1 cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span className='text-3x1 text-indigo-600 mr-1 pt-2'>

          </span>
          OURLOGOGOESHERE
        </div>
      {user ? 
      <>
        <ul className="md:flex md:items-center">
          {
            UserLinks.map((Link)=> (
              <li key={Link.name} className='md:ml-8 text-xl'>
                <a href={Link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{Link.name}</a>
              </li>
            ))
          }
          {/* dummie logout button */}
          <li>
            <a href="" onClick={handleLogOut}>Log Out</a>
          </li>
        </ul>
      </>
      :
      // added functionality for non-users to see a nav bar
      <>
        <ul className="md:flex md:items-center">
          {
            NonUserLinks.map((Link)=>(
              <li key={Link.name} className='md:ml-8 text-xl'>
                <a href={Link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{Link.name}</a>
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