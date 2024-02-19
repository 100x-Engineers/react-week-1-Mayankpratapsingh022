import React, { useEffect, useState } from 'react'
import Profile from '../assets/profile.png'
import LinkImg from '../assets/link.svg'
import CalenterImg from '../assets/calendar.svg'
import { useNavigate,Link } from 'react-router-dom'
import Cookies from 'universal-cookie';


function UserProfileinfo({UserDisplayName ="John Doe",UserName="",Bio="",Website="",Joined="",followers="218",following="312",paramId,profilePicUrl}) {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [userId,setUserId]= useState();
   const [isfollow,setIsfollow] = useState();

  const GetUserId = async () => {

    
    const response =  await  fetch(`${import.meta.env.VITE_FETCH_URL}/id`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
     
          user_id:cookies.get('user_id'),
        
      })
   })
   
   const data = await response.json().then((result) => {
    return result.id;
  
  
  });


  setUserId(data);

  
  }

  const isfollowing = async () =>{
  
    const response =  await  fetch(`${import.meta.env.VITE_VITE_FETCH_URL}/isfollowing`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
     
          followingId:paramId,
          followerId:userId,
        
      })
   })
   
   const data = await response.json().then((result) => {
  
    setIsfollow(result.isFollowing);
  
  });
   }
 const Follow = async () =>{
  
  const response =  await  fetch(`${import.meta.env.VITE_VITE_FETCH_URL}/follow`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
   
        user_id:cookies.get('user_id'),
        followingId:paramId,
        followerId:userId,
      
    })
 })
 isfollowing();
}
 
  
useEffect(()=>{GetUserId()},[]);
console.log(userId);



  return (
    
<section className="px-5 w-full relative"> 
  {/* profile image */}
  <img src={profilePicUrl?profilePicUrl:Profile} className="w-4.25rem h-4.25rem shrink-0 rounded-full object-cover border-4 border-black absolute -top-12 translate-x-3 translate-y-0 bottom-5  " />
  /&gt; 

  <section className=" ">
    {/* edit profile */}
    <span className="flex justify-end  "> 
    {userId==paramId?
 <Link to={`/EditProfile/${userId}` }><button onClick={GetUserId}  className="py-1.5 px-4 border  rounded-full  backdrop-blur-xl text-14 text-neutral-50 leading-normal font-bold font-inter">Edit profile</button></Link> 
 :<button onClick={Follow}  className="py-1.5 px-4 border  rounded-full  backdrop-blur-xl text-14 text-neutral-50 leading-normal font-bold font-inter">{isfollow?"Following":"Follow"}</button>}
    </span>
  </section>
  {/* about user container */}
  <section className="flex w-full flex-col gap-4">
    <div>
      <h2 className="text-xl font-bold leading-normal not-italic  text-neutral-50">{UserDisplayName}</h2>
      <p className="text-neutral-500 text-15 font-inter  leading-normal">@{UserName}</p>
    </div>
    {/* bio text */}
    <div>
      <p className="text-base font-inter leading-normal text-neutral-50">{Bio}</p>
    </div>
    {/* url and joined */}
    <div className="flex items-start  gap-5"> 
      {/* url */}
      <span className="flex flex-row gap-1 items-center"><img src={LinkImg} alt />
        <a href={Website} target='_blank' className="text-twitter-blue">{Website}</a>
      </span>
      {/* joined date */}
      <span className="flex flex-row gap-1 items-center"><img src={CalenterImg} alt />
        <span className="text-base text-neutral-500 font-inter font-normal leading-normal">Joined {Joined.substring(0, 7)}</span>
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