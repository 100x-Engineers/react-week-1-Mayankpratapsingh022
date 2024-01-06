import React, { useState } from "react";
import Profile from "../assets/profile.png";
import { useTweetContext } from "../Context/TweetContext";
import { useNavigate } from "react-router-dom";
import Steps from "./Steps";

function ComposeTweetText({tweetData,setTweetData,buttonFunction}) {


  // const composeTweetData = tweetData.length > 280 ? (
  //   <div>
  //     {tweetData.slice(0, 280)}
  //     <span className="bg-Error">{tweetData.slice(280,tweetData.length)}</span>
  //   </div>
  // ) : tweetData;



  const navigate = useNavigate();


  const { addTweet } = useTweetContext();

  const handleTweet = (event) => {
    event.preventDefault();
     
    if (tweetData.trim() !== "") {
      const newTweets = { text: tweetData };
      
      addTweet(newTweets);
    
   

      navigate("/home");
    }
  };

console.log(tweetData);

  return (



<div>

<Steps hidebutton='display' hidetitle='hidden' Xbuttondirect='/home' onClickFunction={handleTweet}  />

    
    <form
    
      className="flex w-full py-2 px-4 justify-between "
    >
      <div className="flex w-full  items-start justify-center shrink-0 self-stretch gap-3">
        <img src={Profile} className="w-10 rounded-full  " alt />
        <textarea
      value={tweetData}

          
          onChange={(e) => setTweetData(e.target.value)}
          cols={40}
          rows={10}
          placeholder="What's happening?"
          className="w-full  bg-transparent resize-none focus:outline-none placeholder:text-neutral-600 text-neutral-50 text-16 font-regular leading-normal"
          defaultValue={""}

        />
      </div>

    </form>


    </div>
  );
}

export default ComposeTweetText;
