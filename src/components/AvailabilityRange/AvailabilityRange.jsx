export default function AvailabilityRange({ availabilityRange, setAvailabilityRange }) {
  function handleChange(evt) {
    if (evt.target.name === 'startDate') setAvailabilityRange([evt.target.value, availabilityRange[1]]);
    else setAvailabilityRange([availabilityRange[0], evt.target.value]);
  }

  return (
    <section className="rounded border-1 border-neutral-50 px-2 py-2">
      <section className="">
        <h2 className="text-2xl font-semibold">Availability</h2>
        <section className="grid grid-cols-[minmax(0,_4fr)_minmax(0,_8fr)] p-4 items-center gap-y-4">
          <p>From:</p>
          <input className='rounded border-neutral-300' type="date" name="startDate" value={availabilityRange[0]} onChange={handleChange} />
          <p>To:</p>
          <input className='rounded border-neutral-300' type="date" name="endDate" value={availabilityRange[1]} onChange={handleChange} />
        </section>
      </section>
    </section>
  )
}