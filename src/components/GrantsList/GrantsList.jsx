import GrantCard from '../GrantCard/GrantCard';
import './GrantsList.css';
export default function GrantsList({ grantsCopy }) {
  return (
    <section>
      <div className='GrantsList'>
        {grantsCopy.map((grant) => (
          <GrantCard key={grant.OpportunityID} grant={grant} />
        ))}
      </div>
    </section>
  )
}