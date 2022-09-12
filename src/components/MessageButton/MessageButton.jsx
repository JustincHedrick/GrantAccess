import { Link } from 'react-router-dom';
import './MessageButton.css';
export default function MessageButton() {
  return (
    <div className="flex items-center gap-6">
      {/*chat  */}
      <Link to={'/chat'}>
        <button className="inline-block relative">
          <svg xmlns="http://www.w3.org/2000/svg" className='general-icon' fill="none" viewBox="0 0 24 24">
            <path className="stroke-primary-700" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
        </button>
      </Link>
      {/* Alert */}
      <button className="inline-block relative">
        <svg xmlns="http://www.w3.org/2000/svg" className='general-icon' fill="none" viewBox="0 0 24 24">
          <path className="stroke-primary-700" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span class="animate-ping absolute top-1 right-0.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
      </button>
    </div>
  )
}