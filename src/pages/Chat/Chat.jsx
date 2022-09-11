import {useState, useEffect, useRef} from 'react';
import * as conversationApi from "../../utilities/conversation-api";
import * as usersApi from "../../utilities/users-api";
import Conversation from '../../components/Conversation/Conversation';
import Message from '../../components/Message/Message';
import Online from '../../components/Online/Online'
import axios from 'axios';
import {io} from 'socket.io-client'

export default function Chat({user, grants}) {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const endpoint = 'https://grantguide.herokuapp.com/.herokuapp.com/socket.io/?EIO=4&transport=websocket';
  
  const socket = useRef()
  const scrollRef = useRef()
  
  useEffect(() => {
    socket.current = io.connect(endpoint);
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(users)
    })
  }, [user._id])

  useEffect(()=> {
    const getConversation = async () => {
      try {
        const res = await axios.get("/api/conversations/" + user._id);
        setConversations(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    getConversation()
  }, [user._id])

  useEffect(() => {
    const getMessages = async () => {
      try {
      const res = await axios.get("/api/messages/" + currentChat?._id);
      setMessages(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMessages();
  }, [currentChat])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender : user._id,
      text : newMessage,
      conversationId: currentChat._id,
    }
    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );
    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage
    })
    try {
      const res = await axios.post("/api/messages", message );
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior: "smooth",  block: 'nearest'})
  }, [messages])

  return(
    <>
      <div className="messenger flex flex-row h-[80vh]">
        <div className="chatMenu basis-1/5 text-white flex h-full">
          <div className="p-6 bg-emerald-900 w-full">
            <input type="search" placeholder='Search for mentors' class="text-black w-11/12 py-2.5 border-none"></input>
                {conversations.map(c => (
                  <div onClick={() => setCurrentChat(c)} >
                    <Conversation user={user} conversations={c} />
                  </div>
                ))}
          </div>
        </div>
        <div className="chatBox basis-2/5 text-white flex h-full w-full">
          <div className="p-6 bg-neutral-200 flex flex-col w-full relative">
            { currentChat ?
            <>
            <div className="chatBoxTop h-full overflow-y-auto pr-2">
              {messages.map(m =>
                <div ref={scrollRef}>
                  <Message message={m} own={m.sender === user._id}/>
                </div>
              )}
            </div>
            <div className="chatBoxBottom mt-1.5 flex items-center justify-between">
              <textarea
              placeholder='Write something...'
              className='w-4/5 h-24 p-2 text-black'
              onChange={(e) => setNewMessage(e.target.value)}
              value={newMessage}>
              </textarea>
              <button
              className='h-10 w-16 rounded border-none bg-emerald-900 cursor-pointer'
              onClick={handleSubmit}>
                Send
              </button>
            </div>
            </>
            :
            <span className='noConversation absolute top-14 text-4xl cursor-default text-emerald-900'>
              Open a conversation to start a chat!
            </span>
          }
          </div>
        </div>
        <div className="chatOnline basis-2/5 text-white h-full">
          <div className=" p-6 bg-emerald-900 h-full">
            <Online onlineUsers={onlineUsers} currentId={user._id} setCurrentChat={setCurrentChat}/>
          </div>
        </div>
      </div>
    </>
  )
}