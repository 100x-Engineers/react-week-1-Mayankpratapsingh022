import React from 'react'
import UserProfileBanner from './UserProfileBanner'

import UserProfileinfo from './UserProfileinfo'
function UserProfileHeader() {
  return (
    <>
    <div className='bg-black '>
    <UserProfileBanner/>
<main className="flex  w-screen  gap-5  relative  flex-col">
  
 
  <UserProfileinfo/>
 
</main>
</div>
</>
  )
}

export default UserProfileHeader