import React, { useEffect } from 'react'
import HomePageHeader from '../../Componets/HomePageHeader'
import HomePageFooter from '../../Componets/HomePageFooter'
import PlusButton from '../../Componets/PlusButton'
import Tweet from '../../Componets/Tweet'
import { Link } from 'react-router-dom'
import { useTweetContext } from "../../Context/TweetContext";
// import { UserFeed } from '../../services/feedService'

function HomeFeedIndex() {
  
  const { tweet } = useTweetContext();
  console.log(tweet);



  const UserFeed =  async () =>  {

    const response = await fetch("http://localhost:3000/feed");
    const data = response.json();
    console.log(data)
    return data;
      
    
   
   }

   useEffect(()=> {
    UserFeed();
   },[]);
  return (
   <>
<div className="bg-Neutral/1000">

   <HomePageHeader/>
 
  <main className=" overflow-scroll bg-black h-screen ">
   
   {

    tweet.map( (index)=> (

      <Tweet name ="Name" username ="@Johndoe" timestamp="00" TweetText={index.text} />

    ) )
   }
  

  </main>


<Link to="/compose-tweet"><PlusButton/></Link> 
<HomePageFooter/>

</div>


   </>
  )
}

export default HomeFeedIndex