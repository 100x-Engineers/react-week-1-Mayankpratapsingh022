import React from 'react'
import TweetCover from '../assets/twitter-cover.jpg'

import UserProfileBannerButtons from './UserProfileBannerButtons'
function UserProfileBanner({hide="hidden"}) {
  return (
<>
 <section className="flex flex-row w-screen relative  gap-5  ">
<UserProfileBannerButtons hide={hide}/>
  <img src={TweetCover} className="w-screen" alt />
</section>


 
  

</>
  )
}

export default UserProfileBanner