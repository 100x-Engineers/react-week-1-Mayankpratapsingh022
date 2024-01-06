import React from 'react'
import UserProfileBanner from '../../Componets/UserProfileBanner'
import Steps from '../../Componets/Steps'
import Profile from '../../assets/profile.png'
function EditProfile() {
  return (
    <div className='bg-black w-full h-screen'>
       
     
      <Steps hidetitle='hidden' Editprofile='Edit Profile' buttonlink='/userprofile' Xbuttondirect='/UserProfile' hidebutton='display' buttontext='Save' buttonstyle='button-white'  />
   
      <section class="flex flex-row w-screen relative  gap-5 px-5 py-5 ">

    <UserProfileBanner hide='display'  />

</section>

<section className="px-5 w-full relative">
<img src={Profile} className="w-4.25rem h-4.25rem shrink-0 rounded-full object-cover border-4 border-black absolute -top-12 translate-x-3 translate-y-0 bottom-5  " />
    </section>


    </div>
  )
}

export default EditProfile