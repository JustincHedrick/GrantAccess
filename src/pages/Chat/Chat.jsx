import {useState, useEffect} from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import * as conversationApi from "../../utilities/conversation-api";
import Conversation from '../../components/Conversation/Conversation';
import Message from '../../components/Message/Message';
import Online from '../../components/Online/Online'



export default function Chat({user}) {

  const [conversations, setConversations] = useState([]);

  useEffect(()=> {
    const getConversations = async () => {
      try{
      const res = await conversationApi.getConversation();
      console.log(res)
      } catch(err) {
        console.log(err)
      }
    }
  }, [])

  return(
    <>
    <br />
    <br />
    <br />
    <br />
      <div className="messenger flex flex-row h-[80vh]">
        <div className="chatMenu basis-1/5 text-white flex h-full">
          <div className="p-6 bg-emerald-900 w-full">
            <input type="search" placeholder='Search for mentors' class="text-black w-11/12 py-2.5 border-none"></input>
            <Conversation user={user}/>
            <Conversation user={user}/>
            <Conversation user={user}/>
            <Conversation user={user}/>
          </div>
        </div>
        <div className="chatBox basis-2/5 text-white flex h-full w-full">
          <div className="p-6 bg-neutral-200 flex flex-col w-full">
            <div className="chatBoxTop h-full overflow-y-auto pr-2">
              <Message own={true}/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>
              <Message/>
            </div>
            <div className="chatBoxBottom mt-1.5 flex items-center justify-between">
              <textarea placeholder='Write something...' className='w-4/5 h-24 p-2 text-black'></textarea>
              <button className='h-10 w-16 rounded border-none bg-emerald-900 cursor-pointer'>Send</button>
            </div>
          </div>
        </div>
        <div className="chatOnline basis-2/5 text-white h-full">
          <div className=" p-6 bg-emerald-900 h-full">
            <Online />
          </div>
        </div>
      </div>
    </>
  )
}