import React, { useState } from "react";
import Button from '../../Componets/Button'

import Steps from '../../Componets/Steps'
import ComposeTweetText from '../../Componets/ComposeTweetText'


function ComposeTweet() {








  const [tweetData, setTweetData] = useState("");
  return (
<div className="bg-Neutral/1000 h-screen" >
 

 <ComposeTweetText  tweetData= {tweetData} setTweetData  = {setTweetData} /> 






<span className="py-3 px-4 border-t w-full border-neutral-800 text-neutral-500 font-px-regular font-normal  justify-end absolute bottom-5 right-0 left-0 ">{
  tweetData.length > 280 ?   <span className="text-Error">  {280 - tweetData.length} </span>   : tweetData.length





}/280</span>

</div>

  )
}

export default ComposeTweet