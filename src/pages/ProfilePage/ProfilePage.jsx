import { checkToken } from '../../utilities/users-service'

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
      <h1>Profile</h1>
      <button onClick={handleCheckToken}>Check Recent Applications</button>
    </>
  );
}