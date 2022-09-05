import {useState, useEffect } from 'react'
import { Card, Dropdown } from 'flowbite-react';
import { checkToken } from '../../utilities/users-service'
import * as usersApi from "../../utilities/users-api";

import "./ProfilePage.css";

export default function ProfilePage({user}) {

  const [profile, setProfile] = useState({});
useEffect(() => {
  async function updateUserProfile(firstName, lastName, email, password, role, organization, location, about, experience) {
     const profile = await usersApi.getProfile();
    //  console.log(profile);
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
        {user.firstName} {user.lastName}
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {user.role}
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
     <p>{user.about} </p> 
    </h1>
  </Card>
<br></br>
<br></br>
  <Card>
    <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Experience</h1>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     <h1>{user.experience} </h1> 
          {user.organization}<br></br>
          {user.location}
    </p>
  </Card>
    {/* <div> */}

    {/* </div> */}
    

    </>
  );
}
{/* <button onClick={handleCheckToken}>Check Recent Applications</button> */}
      {/* <div id="profile-pic" > */}
    {/* //the upload button here */}
    {/* <div class="flex justify-center items-center w-full">
    <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div>  */}

      {/* </div> */}
          {/* <div id="details">
                <h1>{user.firstName} {user.lastName}</h1>
                <hr></hr>
                <h1>{user.role}</h1>
                <h1>{user.location}</h1>
              </div>
              <a className="edit-profile" href="/editprofile">Edit Profile</a>
          </div> */}