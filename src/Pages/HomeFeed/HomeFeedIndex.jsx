import React from 'react'
import HomePageHeader from '../../Componets/HomePageHeader'
import HomePageFooter from '../../Componets/HomePageFooter'
import PlusButton from '../../Componets/PlusButton'
import Tweet from '../../Componets/Tweet'
import { Link } from 'react-router-dom'
import { useTweetContext } from "../../Context/TweetContext";

function HomeFeedIndex() {
  
  const { tweet } = useTweetContext();
  console.log(tweet);

  return (
   <>
<div className="bg-Neutral/1000">

   <HomePageHeader/>
  {/* content feed */}
  <main className=" overflow-scroll">
   

   <Tweet name ="Name" username ="@Johndoe" timestamp="00" TweetText="this is a tweet" />

  </main>


<Link to="/compose-tweet"><PlusButton/></Link> 
<HomePageFooter/>

</div>


   </>
  )
}

export default HomeFeedIndex