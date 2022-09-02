import React from 'react';

export default function Conversation({user}) {
  return(
    <>
    <div className="conversation flex items-center p-2.5 cursor-pointer hover:bg-gray-500 hover:text-white">
      <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="convoImage w-10 h-10 rounded-full object-cover mr-5 mt-5"/>
      <span className="conversationName font-medium">{user.name}</span>
    </div>
    </>
  )
}