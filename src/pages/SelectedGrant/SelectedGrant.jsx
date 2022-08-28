import './SelectedGrant.css'

export default function SelectedGrant() {

return(
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

    <a href="/grants"><button class="ml-10">Find Grants</button></a>

        
    <div class="flex justify-center px-10 text-gray-700 mt-5 mb-5">
	<div class="flex w-full">
		<div id="selectedGrantPage" class="flex flex-col flex-grow border-r border-gray-300"> 
			<div id="findOneContainer" class="flex justify-between flex-shrink-0 px-8 py-4 border-b border-gray-300">
                <div id="findOne">
                    <h1 class="text-2xl  font-bold">Grant Description <button class="flex items-center h-8 px-2 text-sm bg-gray-300 rounded-sm hover:bg-gray-400">Date Posted</button></h1>
                        <h4 class="font-normal text-gray-700 dark:text-gray-400">Grant Type</h4>
                        <h4 class="font-normal text-gray-700 dark:text-gray-400">Amount</h4>
                        <h4 class="font-normal text-gray-700 dark:text-gray-400">Matching Requirement</h4>
                        <h4 class="font-normal text-gray-700 dark:text-gray-400">CFDA Number</h4>
                </div>
			</div> 
    <h1 class="font-bold text-2xl mt-10">Eligibility</h1>
      <div>
        <p id="eligibility">
            All he could think about was how it would all end. 
            There was still a bit of uncertainty in the equation, 
            but the basics were there for anyone to see. 
            No matter how much he tried to see the positive, 
            it wasn't anywhere to be seen. 
            The end was coming and it wasn't going to be pretty.
            All he could think about was how it would all end. 
            There was still a bit of uncertainty in the equation, 
            but the basics were there for anyone to see. 
            No matter how much he tried to see the positive, 
            it wasn't anywhere to be seen. 
            The end was coming and it wasn't going to be pretty.
            The end was coming and it wasn't going to be pretty.
            All he could think about was how it would all end. 
            There was still a bit of uncertainty in the equation, 
            but the basics were there for anyone to see. 
            No matter how much he tried to see the positive, 
            it wasn't anywhere to be seen. 
            The end was coming and it wasn't going to be pretty.
            The end was coming and it wasn't going to be pretty.
            All he could think about was how it would all end. 
            There was still a bit of uncertainty in the equation, 
            but the basics were there for anyone to see. 
            No matter how much he tried to see the positive, 
            it wasn't anywhere to be seen. 
            The end was coming and it wasn't going to be pretty.
        </p>
    </div>
    <div>
        <h1 class="font-bold text-2xl">Grant Details:</h1>
        <p id="grant-detail">
            All he could think about was how it would all end. 
            There was still a bit of uncertainty in the equation, 
            but the basics were there for anyone to see. 
            No matter how much he tried to see the positive, 
            it wasn't anywhere to be seen. 
            The end was coming and it wasn't going to be pretty.
            All he could think about was how it would all end. 
            There was still a bit of uncertainty in the equation, 
            but the basics were there for anyone to see. 
            No matter how much he tried to see the positive, 
            it wasn't anywhere to be seen. 
            The end was coming and it wasn't going to be pretty.
            All he could think about was how it would all end. 
            There was still a bit of uncertainty in the equation, 
            but the basics were there for anyone to see. 
            No matter how much he tried to see the positive, 
            it wasn't anywhere to be seen. 
            The end was coming and it wasn't going to be pretty.
            All he could think about was how it would all end. 
            There was still a bit of uncertainty in the equation, 
            but the basics were there for anyone to see. 
            No matter how much he tried to see the positive, 
            it wasn't anywhere to be seen. 
            The end was coming and it wasn't going to be pretty.
        </p>
    </div>
			</div>
			<div class="flex-grow h-0 overflow-auto">
				<div class="flex w-full p-8 border-b-4">
					<div class="flex flex-col flex-grow ml-4">	
					</div>
				</div>
				<div class="flex w-full p-8 border-b border-gray-300">
				</div>
			</div>
		</div>
    {/* Search Bar */}
		<div class="flex flex-col flex-shrink-0 w-1/4 py-4 pl-4"><div>
        {/* side panel */}
				<button class="bg-emerald-900 hover:bg-emerald-800 text-white font-semibold py-2 px-20 border border-gray-400 rounded shadow">Apply</button>
				<div class="flex w-full">
				</div>
                <br></br>
				<button class="bg-emerald-900 hover:bg-emerald-800 text-white font-semibold py-2 px-20 border border-gray-400 rounded shadow">

                    Save &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="inline w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>
                </button>
				<div class="flex w-full py-4 border-b border-gray-300">
                <h1>Closing Date:</h1>
				</div>
		{/* Related documentrs */}
				<div class="flex py-4">
					<div class="flex flex-col flex-grow ml-2">
						<div class="flex text-sm">
							<span class="font-bold">Related Documents</span>
						</div>
                        <a href='#'>Related Document #1.pdf</a>
                        <a href='#'>Related Document #1.pdf</a>
                        <br></br>
						<div class="flex text-sm">
							<span class="font-bold">View History</span>
						</div>
                            <a href='#'>Related Document #1.pdf</a>
                            <a href='#'>Related Document #1.pdf</a>
					</div>
				</div>
			</div>
		</div>
	</div>
    <br></br>
    <br></br>
    <br></br>


        
        </>
    )
}
