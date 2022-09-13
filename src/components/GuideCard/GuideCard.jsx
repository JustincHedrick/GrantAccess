import {  } from '@heroicons/react/solid';
import { useNavigate } from 'react-router';
import * as conversationApi from "../../utilities/conversation-api";

export default function GuideCard({guides, user}) {
  const navigate = useNavigate()
  // pass data to controller/api
  async function newConversation() {
    let data = {
      senderId: user._id,
      receiverId: guides._id,
    } ;
    await conversationApi.newConversation(data)
  }

  function handleClick() {
    navigate('/chat')
  };
   
  return(
    <> 
      <div className="flex flex-col justify-end h-52 w-4/6 rounded-md bg-slate-100 border border-slate-400 mt-20 pl-7">
        <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://source.unsplash.com/75x75/?portrait" alt="Guide image"/>
        <span className="font-bold text-xl my-1">{guides.firstName + ` ` + guides.lastName}</span>
        <span className="my-1 text-lg">{guides.role + ` @ ` + guides.organization}</span>
        <span className="text-xs text-slate-400 my-1">{guides.location}</span>
        <span className="my-1">{guides.about}</span>
        <button className='h-8 w-20 bg-green-500 text-xs' onClick={() =>  {newConversation(); handleClick()}} >Send message</button>
      </div>
    </>
  )
}