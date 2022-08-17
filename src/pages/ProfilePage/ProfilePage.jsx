import { checkToken } from '../../utilities/users-service'
import "./ProfilePage.css";

export default function ProfilePage() {

  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate)
  }

     //if mentor for selected area then have a list of mentees listed
      /*
        
      */


     // if mentee have a list of mentors listed for region?
     /*
       1. An organization name
       2. Bio about the organization
       2. problem statement
       3. select which areas you're looking to get mentor'd on
       4. Grant Specifics
     */
 
     
  return (
    <>
      <h1 className='mentor'>Mentor Profile</h1>
      <br></br>
      <br></br>

      <div id="backgroundProfile">
        <div id="profileImg"></div>
        <h1>Mentor Name</h1>
        <h2>Mentor Title</h2>
      </div>


      <hr />

      <div id="bio">
        <h3>About You:</h3>
          {/* <textarea>
          Somehow we have to either add to the form so the user input is synced up with the mentors Overview section.
          </textarea> */}
      </div>

      <br></br>

    <div id="section2">
      <h4>Expertise</h4>
      <br></br>
      <h4>Experience</h4>
      <br></br>
      <h4>Links: </h4>
      



      </div>
      <button onClick={handleCheckToken}>Check Recent Applications</button>
    </>
  );
}