import React from 'react'
import Button from '../../Componets/Button'

import Steps from '../../Componets/Steps'
import ComposeTweetText from '../../Componets/ComposeTweetText'


function ComposeTweet({buttonFunction}) {
  return (
<div className="bg-Neutral/1000 h-screen" >
 <Steps hidebutton='display' hidetitle='hidden' Xbuttondirect='/home' onClickFunction={buttonFunction}  />

 <ComposeTweetText/> 
  
<span className="py-3 px-4 border-t w-full border-neutral-800 text-neutral-500 font-px-regular font-normal  justify-end absolute bottom-5 right-0 left-0 ">0/280</span>

</div>

  )
}

export default ComposeTweet