import React, { useState } from 'react'
import Profile from '../assets/profile.svg'
import Home from '../assets/home.svg'
import Toast from './Toast'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
function HomePageFooter() {
  const [id,setid] = useState();
  const cookies = new Cookies();
  const navigate = useNavigate();
const GetUserId = async () => {
  
  const response =  await  fetch(`http://localhost:3000/id`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
   
        user_id:cookies.get('user_id'),
      
    })
 })
 
 const data = await response.json().then((result) => {
  return result.id;


});





navigate(`/UserProfile/${data}` );

}



  return (
    <footer className="flex w-full fixed bg-black bottom-0 py-1.125rem px-6 justify-center items-center gap-10 border-t border-neutral-800">
    
     {/* <Toast text='Copied to clipboard.'/> */}
     <Link to="/home">
    <img src={Home}  alt="home" /></Link>
  <Link onClick={GetUserId}>
      <img src={Profile} alt="profile" />
</Link>
  </footer>
  )
}

export default HomePageFooter