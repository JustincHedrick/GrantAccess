import './SelectedGrant.css'

export default function SelectedGrant() {

return(
        <>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

    <a href="/grants">Find Grants</a>

        
    <div class="flex justify-center px-4 text-gray-700">
	<div class="flex w-full">
		<div id="selectedGrantPage" class="flex flex-col flex-grow border-r border-gray-300"> 
			<div id="findOneContainer" class="flex justify-between flex-shrink-0 px-8 py-4 border-b border-gray-300">
                <div id="findOne">
                    <h1 class="text-xl font-semibold">Grant Description <button class="flex items-center h-8 px-2 text-sm bg-gray-300 rounded-sm hover:bg-gray-400">Date Posted</button></h1>
                        <h4 class="font-normal text-gray-700 dark:text-gray-400">Grant Type</h4>
                        <h4 class="font-normal text-gray-700 dark:text-gray-400">Amount</h4>
                        <h4 class="font-normal text-gray-700 dark:text-gray-400">Matching Requirement</h4>
                        <h4 class="font-normal text-gray-700 dark:text-gray-400">CFDA Number</h4>
                </div>
			</div> 
    <h1 class="font-bold text-2xl">Eligibility</h1>
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
		<div class="flex flex-col flex-shrink-0 w-1/4 py-4 pl-4">
			<input class="flex items-center h-8 px-2 border border-gray-500 rounded-sm" type="search" Placeholder="Search…" />
			<div>
        {/* side panel */}
				<button class="mt-6 font-semibold">Apply</button>
				<div class="flex w-full">
				</div>
				<button class="mt-6 font-semibold">Save</button>
				<div class="flex w-full py-4 border-b border-gray-300">
                <h1>Closing Date:</h1>
				</div>
		{/* Related documentrs */}
				<div class="flex w-full py-4">
					<div class="flex flex-col flex-grow ml-2">
						<div class="flex text-sm">
							<span class="font-semibold">Related Documents</span>
						</div>
                        <a href='#'>Related Document #1.pdf</a>
                        <a href='#'>Related Document #1.pdf</a>
                        <br></br>
						<div class="flex text-sm">
							<span class="font-semibold">View History</span>
						</div>
                            <a href='#'>Related Document #1.pdf</a>
                            <a href='#'>Related Document #1.pdf</a>
					</div>
				</div>
			</div>
		</div>
	</div>


        
        </>
    )
}
