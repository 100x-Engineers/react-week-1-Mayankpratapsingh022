import React, { useState } from "react";
import Profile from "../assets/profile.png";
import { useTweetContext } from "../Context/TweetContext";
import { useNavigate } from "react-router-dom";
import Steps from "./Steps";
import Cookies from 'universal-cookie';

function ComposeTweetText({tweetData,setTweetData}) {

  const cookies = new Cookies();
 

  const navigate = useNavigate();


  const { addTweet } = useTweetContext();

  const handleTweet = (event) => {
    event.preventDefault();
     
    if (tweetData.trim() !== "") {
      const newTweets = { text: tweetData };
      
      addTweet(newTweets);

      if(newTweets.text.length>280){
        console.log("The tweet should't exceed the limit of 280 chars")
      }else{
         

        const SendTweet =  async ()=>{

         const response =  await  fetch(`http://localhost:3000/addTweet`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                tweet:newTweets.text,
                user_id:cookies.get('user_id'),
              
            })
         }) 
        
        //  return response;

         try{
          if(response.ok){
            console.log("go to home")
            navigate("/home");
             
            }else{
             console.log("There is some error, Can't create The 100x tweet");
            }
          }catch(error){
            console.log(error);
          }
    
      
    

}
  
SendTweet();


// try{
//       if(SendTweet.ok){
//         console.log("go to home")
//         navigate("/home");
         
//         }else{
//          console.log("There is some error, Can't create The 100x tweet");
//         }
//       }catch(error){
//         console.log(error);
//       }

  


   
      }

   
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
