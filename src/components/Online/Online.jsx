import {useState, useEffect} from 'react';
import axios from 'axios'

export default function Online({onlineUsers, currentId, setCurrentChat}) {

  const [mentors, setMentors] = useState([]);
  const [onlineMentors, setOnlineMentors] = useState([])

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/api/users/" + currentId);
      setMentors(res.data)
    }

    getFriends()
  }, [currentId])

  // console.log(mentors)
  
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