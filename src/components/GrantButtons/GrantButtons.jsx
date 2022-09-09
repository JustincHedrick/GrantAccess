export default function GrantButtons() {
  return (
    <div className='flex items-center gap-6'>
      <button type="button" class="text-primary-500 font-semibold text-sm tracking-widest hover:text-white border-2 border-primary-500 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-green-300 rounded text-sm px-5 py-2 text-center"><a href="/grants">FIND GRANTS</a></button>
      <button type="button" class="text-primary-500 font-semibold text-sm tracking-widest hover:text-white border-2 border-primary-500 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-green-300 rounded text-sm px-5 py-2 text-center">FIND GUIDES</button>
    </div>
  )
}