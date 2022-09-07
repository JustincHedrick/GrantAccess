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
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">{grant.OpportunityTitle}</h5>
                <h4 className="mb-2 text-base tracking-tight text-gray-900">{grant.AgencyName}</h4>
                <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900">Description</h5>
                <p id="grant-desc">{grant.Description}</p>
                <a href='/selectedgrant'>Read More</a>
            </div>
            {/* <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.PostDate}</h4> */}
        </article>
    )
    {/* <div class="flex justify-center">
  <nav aria-label="Page navigation example">
    <ul class="flex list-style-none">
      <li class="page-item disabled"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-500 pointer-events-none focus:shadow-none"
          href="#" tabindex="-1" aria-disabled="true">Previous</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">1</a></li>
      <li class="page-item active"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-blue-600 outline-none transition-all duration-300 rounded text-white hover:text-white hover:bg-blue-600 shadow-md focus:shadow-md"
          href="#">2 <span class="visually-hidden"></span></a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">3</a></li>
      <li class="page-item"><a
          class="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          href="#">Next</a></li>
    </ul>
  </nav>
</div> */}
}