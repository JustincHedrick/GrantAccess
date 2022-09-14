import {  } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import * as conversationApi from "../../utilities/conversation-api";

export default function GuideCard({guides, user, guideId}) {
  
  const [guideInfo, setGuideInfo] = useState(guides);

  // const navigate = useNavigate()
  // pass data to controller/api
  // async function newConversation() {
  //   let data = {
  //     senderId: user._id,
  //     receiverId: guides._id,
  //   } ;
  //   await conversationApi.newConversation(data)
  // }


  function getGuideId() {
    let guide = guides._id
    setGuideInfo(guide)
  }

  // function handleClick() {
  //   navigate('/chat')
  // };
  
  
  return(
    <> 
      <Link to="/guideprofile" onClick={getGuideId} state={{guide: guideInfo}}>
      <div className="flex flex-col justify-end h-52 w-4/6 rounded-md bg-slate-100 border border-slate-400 mt-20 pl-7">
        
        <div className='flex flex-row justify-between' value={guideId}>
          <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://source.unsplash.com/75x75/?portrait" alt="Guide image"/>
          {/* <button className='h-8 w-36 bg-primary-50 text-xs rounded mt-16 mr-10 font-semibold hover:bg-primary-10' onClick={(e) =>  {newConversation(); handleClick();}}>Connect with {guides.firstName}</button> */}
        </div>
        <span className="font-bold text-xl my-1">{guides.firstName + ` ` + guides.lastName}</span>
        <span className="my-1 text-lg">{guides.role + ` @ ` + guides.organization}</span>
        <span className="text-xs text-slate-400 my-1">{guides.location}</span>
        <span className="my-1">{guides.about}</span>
      </div>
      </Link>
    </>
  )
}