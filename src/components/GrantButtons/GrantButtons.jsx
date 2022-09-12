import { Link } from 'react-router-dom';
export default function GrantButtons() {
  return (
    <div className='flex items-center gap-6'>
      <Link to={'/grants'}>
        <button
          type="button"
          class="
          text-primary-500
          font-semibold
          text-sm tracking-widest
          hover:text-white
          border-2
          border-primary-500
          hover:bg-primary-500
          rounded text-sm
          px-5
          py-2
          text-center"
        >
          FIND GRANTS
        </button>
      </Link>
      <Link to={'/'}>
        <button
          type="button"
          class="
          text-primary-500
          font-semibold
          text-sm
          tracking-widest
          hover:text-white
          border-2
          border-primary-500
          hover:bg-primary-500
          rounded
          text-sm
          px-5
          py-2
          text-center"
        >
          FIND GUIDES
        </button>
      </Link>
    </div>
  )
}