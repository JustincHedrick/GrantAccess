
import {useState, useEffect } from 'react'
import { Card, Dropdown } from 'flowbite-react';
import { checkToken } from '../../utilities/users-service'
import * as usersApi from "../../utilities/users-api";
import "./ProfilePage.css";

export default function ProfilePage({ user, guides }) {

  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function updateUserProfile(firstName, lastName, email, role, organization, location, about, experience, jobDescription) {
     const profile = await usersApi.getUser(user._id);
     setProfile(profile);

      //     navigate('/userprofile');
    }
    updateUserProfile();
  }, [])






  async function handleCheckToken() {
    const expDate = await checkToken();
    // console.log(expDate)
  }



  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      <div className="w-full">
  <Card>
    <div className="flex justify-end px-4 pt-4">
      <Dropdown
        inline={true}
        label=""
      >
        <Dropdown.Item>
          <a
            href="/editprofile"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Edit
          </a>
        </Dropdown.Item>

      </Dropdown>
    </div>
    <div className="flex flex-col items-center pb-52">
      <img
        className="mb-3 h-24 w-24 rounded-full shadow-lg"
        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
        alt="Bonnie image"
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {profile&&profile.firstName}
        {/* {user.firstName}  */}
        {/* [setProfile] */}
        {user.lastName}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {/* {user.role} */}
      </span>
      <div className="mt-4 flex space-x-3 lg:mt-6">
        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
          Save Mentor
        </a>
        <a
          href="chat"
          className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
          Message Me
        </a>
      </div>
    </div>
  </Card>
</div>
<br></br>
<br></br>
  <Card>
    <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <h1>About</h1>
     {/* <p>{user.about} </p>  */}
    </h1>
  </Card>
<br></br>
<br></br>
  <Card>
    <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Experience</h1>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     {/* <h1>{user.experience} </h1>  */}
        <p className="text-sm text-gray-700"> 
        {/* {user.organization} */}
        {/* {user.location} */}
        </p> 
          
    </p>
  </Card>
    </>
  );
}
