import React, { useEffect, useState } from 'react'
import UserProfileHeader from '../../Componets/UserProfileHeader'
import Tweet from '../../Componets/Tweet'
import PlusButton from '../../Componets/PlusButton'
import HomePageFooter from '../../Componets/HomePageFooter'
import {useParams} from 'react-router-dom';
import { Link  } from 'react-router-dom'


function UserProfile() {
  const [posts, setPosts] = useState([]);
  
  const userId = useParams().id;
  const GetUserInfo = async () => {
  
    const response =  await  fetch(`http://localhost:3000/CurrentUserFeed/${userId}`);
  
   const data = await response.json().then((result) => {
    setPosts(result.posts);
    return result
  
  
  }
  
  
  );
  
  console.log(data);


  }




  useEffect(()=> {  GetUserInfo()

  },[userId])
  


  return (
  <>
    <div className='bg-black '>
    <UserProfileHeader paramId={userId}/>

  
    {

posts.map( (posts)=> (

  <Tweet name={posts.User?posts.User.displayName:'Unknown User'} profilePicUrl={posts.User?posts.User.profilePicUrl:false} userId={posts.User?posts.userId:"10"} username ={posts.User ? posts.User.username : 'noUsername'} createdAt={posts.createdAt} key={posts.id} TweetText={posts.content} PostId={posts.id}  />

) )
}





    <Link to="/compose-tweet"> <PlusButton/></Link>
    <HomePageFooter/>
    </div>
  </>
  )
}

export default UserProfile