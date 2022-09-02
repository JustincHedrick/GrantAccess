


export default function Message({own}) {
  return (
    <>
      <div className="message flex flex-col mt-4 items-end">
        <div className="messageTop flex">
          <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="messageImg w-8 h-8 rounded-full object-cover mr-2"/>
          {
            own ? 
            <p className="own p-2 rounded-2xl bg-emerald-900 font-medium max-w-xs mb-0 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minus et voluptatum.</p>
            :
            <p className="messageText p-2 rounded-2xl bg-white text-black font-medium max-w-xs mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error minus et voluptatum.</p>
          }
        </div>
        <div className="messageBottom text-xs mt-2 text-emerald-900 font-medium">
          30 minutes ago
        </div>
      </div>
    </>
  )
}