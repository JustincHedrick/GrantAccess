import React from 'react';
import {useEffect, useState} from 'react';
import * as usersApi from "../../utilities/users-api";
import axios from 'axios';

export default function Conversation({user, conversations}) {
  const [mentor, setMentor] = useState('');

  useEffect(() => {
    getUser()
  }, [user, conversations])

  async function getUser(){
    const mentor = conversations.members.find(m => m !== user._id);
    try {
      const res = await axios(`/api/users/` + mentor)
      setMentor(res.data)
    } catch(err) {
      console.log(err)
    }
  }
  
  

  return(
    <>
    <div className="conversation flex items-center p-2.5 cursor-pointer hover:bg-gray-500 hover:text-white">
      <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="convoImage w-10 h-10 rounded-full object-cover mr-5 mt-5"/> 
      <span className="conversationName font-medium">{mentor.name}</span>
    </div>
    </>
  )
}