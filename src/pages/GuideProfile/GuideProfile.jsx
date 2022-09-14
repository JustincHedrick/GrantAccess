import { useLocation } from "react-router-dom"


export default function guideProfile({user}) {
  const location = useLocation()
  const guide = location.state

  return(
    <>
      <div className="flex flex-col items-start pb-52">
        <div className="flex flex-row items-between pb-52">
          <img
          className="mb-3 h-24 w-24 rounded-full shadow-lg"
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          alt="Bonnie image"
          />
          <span>{guide.guide._id}</span>
          <span>{guide.guide.firstName}</span>
        </div>
      </div>
    </>
  )
}