import GrantCard from '../GrantCard/GrantCard';
import './GrantsList.css';

export default function GrantsList({ user, grantsCopy, setGrantsCopy }) {
  return (
    <section>
      <div className='GrantsList'>
        {grantsCopy.map((grant) => <GrantCard key={grant.OpportunityID} user={user} grant={grant} grantsCopy={grantsCopy} setGrantsCopy={setGrantsCopy} />)}
      </div>
    </section>
  )
}