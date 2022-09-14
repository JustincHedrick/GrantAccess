import { useLocation, useNavigate } from "react-router-dom";
import * as conversationApi from "../../utilities/conversation-api";


export default function guideProfile({user}) {
  const location = useLocation()
  const guide = location.state
  
 const navigate = useNavigate()

  async function newConversation() {
    let data = {
      senderId: user._id,
      receiverId: guide.guide._id,
    } ;
    await conversationApi.newConversation(data)
  }

  function handleClick() {
    navigate('/chat')
  };

  return(
    <div>
      <div className="flex flex-col items-start mb-44">
        <div className="flex flex-row items-between pb-10 mt-20">
          <img
          className="mb-3 h-44 w-44 rounded-full shadow-lg border-8 border-primary-50"
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          alt="Bonnie image"
          />
          <div className="flex flex-col">
            <span className="ml-5 mt-10 text-xl text-primary-300 font-bold">{guide.guide.firstName + " " + guide.guide.lastName}</span>
            <span className="ml-5 text-xs">{guide.guide.role}</span>
          </div>
        </div>
        <div className="flex flex-row w-auto items-center">
          <div className="w-90">

          </div>
          <button className='h-8 w-36 ml-auto bg-primary-50 text-xs rounded mt-16 mr-10 font-semibold hover:bg-white hover:text-primary-50 text-white' onClick={(e) =>  {newConversation(); handleClick();}}>Connect with {guide.guide.firstName}
            </button>
        </div>
        <div className="flex flex-col mt-5">
          <span className="font-bold">About me</span>
          <div className=" flex mt-3 border border-slate-300 h-20 items-center justify-items-center">
            <span className="m-5 my-5">{guide.guide.about}</span>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <span className="font-bold">Experience:</span>
          <div className=" flex mt-3 border border-slate-300 h-20 items-center justify-items-center">
            <span className="m-5 my-5">{guide.guide.jobDescription}</span>
          </div>
        </div>
      </div>
    </div>
  )
}