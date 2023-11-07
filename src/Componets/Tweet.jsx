import React from 'react'
import CommentImg from '../assets/comment.svg'
import ReTweetImg from '../assets/retweet.svg'
import HeartImg from '../assets/heart.svg'
import ReachImg from '../assets/reach.svg'
import ShareImg from '../assets/share.svg'
import Profile from '../assets/profile.png'




function Tweet({name ="Name",username="@Johndoe",timestamp="00",TweetText="this is a tweet"}) {
  return (
    <div className="box-border px-4 py-2 h-min flex border-b border-neutral-700">
    <div className="min-w-fit h-12 overflow-hidden mr-4 rounded-full">
      <img src={Profile} alt="userprofile" className="w-12 h-12 object-cover" />
    </div>
    <div className="w-full">
      <div className="mb-1">
        <div className="text-neutral-50 mb-1 flex  gap-1 ">
          <span className="text-16 font-medium">{name}</span>
          <span className="text-neutral-500">{username}</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-500">{timestamp}h</span>
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
          <img src={HeartImg} alt />
          <span className="text-14 font-regular">1,869</span>
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