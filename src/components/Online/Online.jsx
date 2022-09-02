

export default function Online() {
  return(
    <>
      <div className="chatOnline">
        <div className="chatOnlineMentor flex items-center font-500 cursor-pointer mt-2">
          <div className="mentorImgContainer relative mr-2">
            <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-10 h-10 rounded-full object-cover border border-solid border-white"/>
            <div className="chatOnlineBadge absolute w-2 h-2 rounded-full bg-lime-500 top-0.5 right-0 "></div>
          </div>
          <span className="chatOnlineName">Mentor Name</span>
        </div>
      </div>
    </>
  )
}