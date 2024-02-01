import React, { useEffect, useState } from 'react'

import UserProfileBanner from './UserProfileBanner'
import {useParams} from 'react-router-dom';
import UserProfileinfo from './UserProfileinfo'

function UserProfileHeader({paramId}) {
  const userId = useParams().id;
  const [userInfo,setUserInfo] = useState({
     UserDisplayName:" ",
     UserName:" ",
     Bio:" ",
     website:" ",
     Joined:" ",
     profilePicUrl:false,
  });

  const GetUserInfo = async () => {
  
    const response =  await  fetch(`http://localhost:3000/CurrentUserProfile/${userId}`);
  
   const data = await response.json().then((result) => {

    return result
  
  
  });
  
setUserInfo({
  ...userInfo,
  UserDisplayName:data.UserDisplayName,
  UserName:data.UserName,
  Bio:data.Bio,
  website:data.Website,
  Joined:data.Joined,
  profilePicUrl:data.profilePicUrl
})
  

  
  }
  
  

useEffect(()=> {  GetUserInfo()

},[])





  return (
    <>
    <div className='bg-black '>
    <UserProfileBanner/>
<main className="flex  w-screen  gap-5  relative  flex-col">
  
 
  <UserProfileinfo Bio={userInfo.Bio} UserDisplayName = {userInfo.UserDisplayName} profilePicUrl={userInfo.profilePicUrl} paramId={paramId} UserName={userInfo.UserName} Website={userInfo.website} Joined={userInfo.Joined}/>
 
</main>
</div>
</>
  )
}

export default UserProfileHeader