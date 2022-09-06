import Pagination from '../Pagination/Pagination';
import './GrantCards.css'

// {grants, setGrants}

export default function GrantsPage({ grantsCopy }) {

    return (
        <section>
            <div className='grantCards'>
                {grantsCopy.filter((_, idx) => idx < 12).map((item) => (
                    <div key={item.OpportunityID} className="items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
                        <div className="justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.OpportunityTitle}({item.OpportunityID}) &nbsp; <a href='#'>hi</a></h5>
                            <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.AgencyName}</h4>


                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Description:</h5>
                            <p id="grant-desc">{item.Description}</p>

                            <a href='/selectedgrant'>Read More</a>
                        </div>
                        {/* <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.PostDate}</h4> */}
                    </div>
                ))}
            </div>
            <Pagination />
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

        </section>
    )

}