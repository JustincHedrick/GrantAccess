import { checkToken } from '../../utilities/users-service'
import * as usersApi from "../../utilities/users-api";

import "./ProfilePage.css";

export default function ProfilePage({user}) {

  const [profile, setProfile] = useState({});
useEffect(() => {
  async function updateUserProfile(name, bio) {
     const profile = await usersApi.getProfile();
     console.log(profile);
     setProfile(profile);

  //     navigate('/userprofile');
}
updateUserProfile();
}, [])






  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate)
  }

 
     
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
      <h1>random</h1>
    <div className='background-cont'>
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

        <div id="details">
          <h1>{user.name}</h1>
          <hr></hr>
          <h1>Job Title</h1>
        </div>
        <a className="edit-profile" href="/editprofile">Edit Profile</a>





    </div>
    <br></br>
    <br></br>
    <br></br>

    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
        <li class="mr-2" role="presentation">
            <button class="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Profile</button>
        </li>
        <li class="mr-2" role="presentation">
            <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Overview</button>
        </li>

    </ul>
</div>
<div id="myTabContent">
    <div class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <h1>Personal Introduction:</h1>
          <hr></hr>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          random random random random random random random random random random random random random random random random 
        </p>
          <h1>Experience</h1>
          <hr></hr>
          <h1>Topic</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          random random random random random random random random random random random random random random random random 
        </p>
          <h1>Links</h1>
          <hr></hr>
          <h1>....</h1>
        <ol class="text-sm text-gray-500 dark:text-gray-400">
          <li>random random random random random random random random random random random random random random random random</li> 
          <li>random random random random random random random random random random random random random random random random</li> 
          <li>random random random random random random random random random random random random random random random random</li> 
        </ol>
    </div>


    <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="REVIEWS" role="tabpanel" aria-labelledby="dashboard-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
    </div>

</div>

    </>
  );
}
{/* <button onClick={handleCheckToken}>Check Recent Applications</button> */}