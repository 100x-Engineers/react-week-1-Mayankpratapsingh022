import React from 'react'
import AddaPhoto from '../assets/add-a-photo.svg'
import Cancel from '../assets/cancel.svg'
function UserProfileBannerButtons({hide="hidden"}) {

let base = `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex ${hide} flex-row gap-2 `

  return (
    <div className={base}>
    {/* camera icon */}
    <div className="flex p-1 justify-center items-center gap-2.5 rounded-full bg-black opacity-60   ">
      <img src={AddaPhoto} className="w-6 h-6 " alt />
    </div>
    {/* cancel icon */}
    <div className="flex p-1 justify-center items-center gap-2.5 rounded-full bg-black opacity-60">
      <img src={Cancel} className="w-6 h-6 " alt />
    </div>
  </div>
    
  )
}

export default UserProfileBannerButtons