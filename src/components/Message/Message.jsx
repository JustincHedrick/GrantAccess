import {format} from 'timeago.js'


export default function Message({message, own}) {
  return (
    <>
      <div className={`message flex flex-col mt-4 ${own ? 'items-end': 'items-start' }`}>
        <div className='messageTop flex'>
          <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="messageImg w-8 h-8 rounded-full object-cover mr-2"/>
          {
            own ? 
            <p className="own p-2 rounded-2xl bg-emerald-900 font-medium max-w-xs mb-0 text-white">
              {message.text}
            </p>
            :
            <p className="messageText p-2 rounded-2xl bg-white text-black font-medium max-w-xs mb-0">
              {message.text}
            </p>
          }
        </div>
        <div className="messageBottom text-xs mt-2 text-emerald-900 font-medium">
          {format(message.createdAt)}
        </div>
      </div>
    </>
  )
}