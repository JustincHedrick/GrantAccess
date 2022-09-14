import { useEffect, useState } from 'react';
import * as grantsAPI from '../../utilities/grants-api';
export default function Dashboard({ user, grants }) {
  const [savedGrants, setSavedGrants] = useState([]);

  useEffect(() => {
    function processGrants(user, grants) {
      const savedGrants = grants.map((grant) => {
        const userSet = new Set([...grant.users]);
        grant.isSaved = userSet.has(user._id);
        return grant;
      });
      return savedGrants.filter((grant) => grant.isSaved);
    }
    async function getSavedGrants() {
      let savedGrants = await grantsAPI.getGrants();
      savedGrants = processGrants(user, savedGrants);
      setSavedGrants(savedGrants);
    }
    getSavedGrants();
  }, []);



  return (
    <div className='pt-8'>
      <h1 className="whitespace-pre-line text-4xl font-bold">Welcome Back, {user.firstName}!</h1>
    </div>
  )
}
