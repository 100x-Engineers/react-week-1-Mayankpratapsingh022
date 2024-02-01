import React, { useEffect ,useState} from 'react'
import HomePageHeader from '../../Componets/HomePageHeader'
import HomePageFooter from '../../Componets/HomePageFooter'
import PlusButton from '../../Componets/PlusButton'
import Tweet from '../../Componets/Tweet'
import { Link } from 'react-router-dom'
import { useTweetContext } from "../../Context/TweetContext";
// import { UserFeed } from '../../services/feedService'
import Cookies from 'universal-cookie';

function HomeFeedIndex() {
  //  const [userId,setUserID]= useState();
  const cookies = new Cookies();
  const { tweet } = useTweetContext();
  console.log(tweet);

  const [posts, setPosts] = useState([]);

  const UserFeed =  async () =>  {

    const response = await fetch("http://localhost:3000/feed",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
       user_id:cookies.get('user_id'),
        
      })
   });




    const data = response.json();
  
    data.then((result) => {
    
      setPosts(result.posts);
  
    });
    console.log(posts, "cons")




   const LikeNumberData = LikeNUmberResponse.json();
  
   LikeNumberData.then((result) => {
   
 
   console.log(result.posts.id);
   });


    return data;
      
    
   
   }
   console.log(posts,"this is post")

   useEffect(()=> {
    UserFeed();
   },[]);
  return (
   <>
<div className="bg-Neutral/1000">

   <HomePageHeader/>
 
  <main className=" overflow-scroll bg-black h-screen ">
   
  {

    posts.map( (posts)=> (
  
      <Tweet name={posts.User?posts.User.displayName:'Unknown User'} profilePicUrl={posts.User?posts.User.profilePicUrl:false} userId={posts.User?posts.userId:"10"} username ={posts.User ? posts.User.username : 'noUsername'} createdAt={posts.createdAt} key={posts.id} TweetText={posts.content} PostId={posts.id} />

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