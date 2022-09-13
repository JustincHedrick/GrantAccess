import {  } from '@heroicons/react/solid';

export default function GuideCard({guides}) {
  return(
    <> 
      <div className="flex flex-col justify-end h-52 w-5/6 rounded-md bg-slate-100 border border-slate-400 mt-10 pl-7">
        <span className="font-bold text-xl my-1">{guides.firstName + ` ` + guides.lastName}</span>
        <span className="my-1 text-lg">{guides.role + ` @ ` + guides.organization}</span>
        <span className="text-xs text-slate-400 my-1">{guides.location}</span>
        <span className="my-1">{guides.about}</span>
        <button className='h-8 w-20 bg-green-500 text-xs'>Send message</button>
      </div>
    </>
  )
}