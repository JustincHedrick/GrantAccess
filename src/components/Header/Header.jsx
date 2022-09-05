import './Header.css'
export default function Header() {

    return(
        <>
        <div className='background'>
            <div id="header">
            <h1 id="title">Expert guidance on Environmental grants</h1>
            <h2 id="header-p">Chat with Experience Guides</h2>
                <p id="p2">Find and connect with Grant Guides- experienced fellow grant seekers open to sharing advice and insight.</p>
            <h2 id="header-p">Search Grant Details</h2>
                <p id="p2">Find information adn resources for currently open grants and past awards.</p>

            <a href='/aboutus' className="learnMore"> 
                <button 
                type="button"
                class="text-green-700 hover:text-white bg-white border border-green-900 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-20 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                    Learn More
                </button>
                </a>
                <a href='/grants'  className="GetStarted">
                <button 
                type="button" 
                class="focus:outline-none text-white bg-green-900 font-medium rounded-lg text-sm px-20 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Get Started
                </button>
                </a>



            </div>
        </div>


        
            
        </>
    )
}