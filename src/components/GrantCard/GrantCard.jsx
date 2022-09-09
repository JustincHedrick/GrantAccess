import Pagination from '../Pagination/Pagination';
import './GrantCard.css'

// {grants, setGrants}

export default function GrantsCards({ grant }) {

    function formatDate(date) {
        const newDate = new Date(date);
        const options = {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }
        return newDate.toLocaleDateString('en-US', options);
    }
    
    return (
        <article className="items-center bg-white rounded-lg border-1 border-neutral-300  mb-8 last:mb-0 md:flex-row hover:bg-gray-100">
            <section className='flex flex-row justify-between text-white bg-primary-500 rounded-t-md px-4 py-2'>
                <p>CFDA #: {grant.CFDANumbers}</p>
                <p>{formatDate(grant.CloseDate)}</p>
            </section>
            <div className="justify-between p-4 bg-shade-0 rounded-b-md leading-normal">
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900">{grant.OpportunityTitle}</h5>
                <h4 className="mb-2 text-base tracking-tight text-gray-900">{grant.AgencyName}</h4>
                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900">Description</h5>
                <p id="grant-desc">{grant.Description}</p>
                <a href='/selectedgrant'>Read More</a>
            </div>
        </article>
    )
}