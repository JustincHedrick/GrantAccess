import { useEffect, useState } from 'react';
import * as grantsAPI from '../../utilities/grants-api';
import GrantsList from '../../components/GrantsList/GrantsList';
import { Spinner } from 'flowbite-react';

export default function Dashboard({ user, grantsCopy, setGrantsCopy, grants, setGrants }) {
  const [savedGrants, setSavedGrants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const applySavedProperty = (user, grants) => {
      const savedGrants = grants.map((grant) => {
        const userSet = new Set([...grant.users]);
        grant.isSaved = userSet.has(user._id);
        return grant;
      });
      return savedGrants.filter((grant) => grant.isSaved);
    }
    async function getSavedGrants() {
      let savedGrants = await grantsAPI.getGrants();
      savedGrants = applySavedProperty(user, savedGrants);
      setSavedGrants(savedGrants);
      setIsLoading(false);
    }
    getSavedGrants();
  }, []);

  return (
    <div className='pt-8 pb-8'>
      <h1 className="whitespace-pre-line text-4xl font-bold mb-4">Welcome Back, {user.firstName}!</h1>
      <h2 className='text-3xl font-semibold mb-4'>Saved Grants</h2>
      {isLoading ? (
        <div className='flex items-middle justify-center'>
          <Spinner
            aria-label="Extra large spinner example"
            size="xl"
            color='success'
          />
        </div>
      ) : savedGrants.length ? (
        <GrantsList user={user} grantsCopy={savedGrants} setGrantsCopy={setSavedGrants} grants={grants} setGrants={setGrants} />
      ) : <p className='text-2xl'>No Saved Grants</p>}
    </div>
  )
}
