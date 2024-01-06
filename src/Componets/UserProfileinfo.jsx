import React from 'react'
import Profile from '../assets/profile.png'
import { Link } from 'react-router-dom'

function UserProfileinfo({name="Mayank Pratap Singh",username="@aarushe_reddy",bio="Digital Goodies Team - Web  Mobile UI/UX development; Graphics; Illustrations",url="pixsellz.io",joinedDate="September 2018",followers="218",following="312"}) {
  return (
    
<section className="px-5 w-full relative"> 
  {/* profile image */}
  <img src={Profile} className="w-4.25rem h-4.25rem shrink-0 rounded-full object-cover border-4 border-black absolute -top-12 translate-x-3 translate-y-0 bottom-5  " />
  /&gt; 
  <section className=" ">
    {/* edit profile */}
    <span className="flex justify-end  "> 
    
     <Link to={"/EditProfile"}><button className="py-1.5 px-4 border  rounded-full  backdrop-blur-xl text-14 text-neutral-50 leading-normal font-bold font-inter">Edit profile</button></Link>
     
    </span>
  </section>
  {/* about user container */}
  <section className="flex w-full flex-col gap-4">
    <div>
      <h2 className="text-xl font-bold leading-normal not-italic  text-neutral-50">{name}</h2>
      <p className="text-neutral-500 text-15 font-inter  leading-normal">{username}</p>
    </div>
    {/* bio text */}
    <div>
      <p className="text-base font-inter leading-normal text-neutral-50">{bio}</p>
    </div>
    {/* url and joined */}
    <div className="flex items-start  gap-5"> 
      {/* url */}
      <span className="flex flex-row gap-1 items-center"><img src="../../public/images/link.svg" alt />
        <a href="#" className="text-twitter-blue">{url}</a>
      </span>
      {/* joined date */}
      <span className="flex flex-row gap-1 items-center"><img src="../../public/images/calendar.svg" alt />
        <span className="text-base text-neutral-500 font-inter font-normal leading-normal">Joined {joinedDate}</span>
      </span>
    </div>
    {/* followers and following */}
    <div className="flex gap-5">
      <div className="flex items-center gap-1">
        <span className="text-neutral-50 text-base leading-normal font-bold font-inter">{following}</span>
        <span className="text-neutral-500 text-base leading-normal font-inter">Following</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-neutral-50 text-base leading-normal font-bold font-inter">{followers}</span>
        <span className="text-neutral-500 text-base leading-normal font-inter">Followers</span>
      </div>
    </div>
  </section>
</section>


  )
}

export default UserProfileinfo