import React, { useEffect, useState } from 'react'
import CommentImg from '../assets/comment.svg'
import ReTweetImg from '../assets/retweet.svg'
import HeartImg from '../assets/heart.svg'

import ReachImg from '../assets/reach.svg'
import ShareImg from '../assets/share.svg'
import Profile from '../assets/profile.png'
import HeartFull from '../assets/heartFull.svg'

import axios from 'axios';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom'



function Tweet({name ="Name",username="@Johndoe",createdAt="00",TweetText="this is a tweet", PostId,userId,profilePicUrl}) {
  const cookies = new Cookies();
  const UserIdToken = cookies.get('user_id');
  let [likeStatus,setLikeStatus]= useState();
  let [TotalLikes,setTotalLikes]=useState(0);
  let [userIdres,setUserIDres]= useState();
   const getid = async ()=>{
    const responseId =  await axios.post(`${import.meta.env.VITE_FETCH_URL}/id`, {
      user_id:UserIdToken,
      userId:userIdres,
      postId:PostId,
    });
   setUserIDres(responseId.data.id);

   }

   useEffect( () => {getid()},[]);


  const likeStatusFunction = async ()=>{


    const response =  await  fetch(`${import.meta.env.VITE_FETCH_URL}/likeStatus`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
             
           
             userId:userIdres,
             postId:PostId,
           
             
             
     })
   }) 


   const data = await response.json();
   console.log(data.likestatus);
   
   setLikeStatus(data.likestatus);
   console.log(data.likestatus,"hellooo");
// console.log(likeStatus)
  // const likeStatusresponse = await  axios.post(`${import.meta.env.VITE_FETCH_URL}/likeStatus`,{
  //   user_id:UserIdToken,
  //   userId:userIdres,
  //   postId:PostId,
  //  })
  
  //  if (likeStatusresponse) {
  //   setLikeStatus(likeStatusresponse.likestatus);
  //   console.log(likeStatus);
  // } else {
  //   console.error('Failed to fetch like status');
  // }


  }


 



  const formatTimestamp = (createdAt) => {
    const now = new Date();
    const tweetDate = new Date(createdAt);
    const timeDifference = now - tweetDate;

    // Convert milliseconds to seconds
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
      return `${seconds}s ago`;
    } else if (minutes < 60) {
      return `${minutes}m ago`;
    } else if (hours < 24) {
      return `${hours}h ago`;
    } else if (days < 30) {
      return `${days}d ago`;
    } else if (months < 12) {
      return `${months}mo ago`;
    } else {
      return `${years}y ago`;
    }
  };



const likenumber = async()=>{
   const result = await axios.post(`${import.meta.env.VITE_FETCH_URL}/likeNumber/${PostId}`)
   
   setTotalLikes(result.data.TotolLike);
   console.log(TotalLikes)
}


const likeTweetFunction = async () =>{

  

 
 

  const response =  await  fetch(`${import.meta.env.VITE_FETCH_URL}/like`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
           
           user_id:UserIdToken,
           userId:userIdres,
           postId:PostId,
         
           
           
   })
 }) 


//  console.log(response);

 likeStatusFunction();
likenumber();
}

// likeStatusFunction();
useEffect(()=>{

likeStatusFunction();
likenumber();
},[]);


  return (
    <div className="box-border px-4 py-2 h-min flex border-b border-neutral-700">
    <div className="min-w-fit h-12 overflow-hidden mr-4 rounded-full">
   <Link to={`/UserProfile/${userId}`}>  <img src={profilePicUrl?profilePicUrl:Profile} alt="userprofile" className="w-12 h-12 object-cover" /></Link> 
    </div>
    <div className="w-full">
      <div className="mb-1">
        <div className="text-neutral-50 mb-1 flex  gap-1 ">
          <span className="text-16 font-medium">{name}</span>
          <span className="text-neutral-500 px-1"> {username}</span>
          <span className="text-neutral-500">•</span >
          <span className="text-neutral-500">{formatTimestamp(createdAt)}</span>
        </div>
        <p className="text-neutral-50 text-15 font-regular">{TweetText}
        </p>
      </div>
      <div className="text-neutral-500 flex items-center justify-between py-3">

    
        <div className="flex items-center gap-1">
          <img src={CommentImg} alt />
          <span className="text-14 font-regular">11</span>
        </div>
        <div className="flex items-center gap-1">
             <img src={ReTweetImg} alt />
          <span className="text-14 font-regular">270</span>
        </div>
        <div className="flex items-center gap-1">
         <button onClick={likeTweetFunction}> <img src={likeStatus?HeartFull:HeartImg} alt /> </button>
          <span className="text-14 font-regular">{TotalLikes}</span>
        </div>

    
        <div className="flex items-center gap-1">
          <img src={ReachImg} />
          <span className="text-14 font-regular">99.6k</span>
        </div>
        <div className="flex">
          <img src={ShareImg}  />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Tweet