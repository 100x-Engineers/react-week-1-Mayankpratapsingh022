import React from 'react'
import ForyouAndFollowing from './ForyouAndFollowing'
import Logo from '../assets/100x.svg'
import Profile from '../assets/profile.png'
import Logout from '../assets/logout.svg'
import Cookies from 'universal-cookie';

function HomePageHeader() {
  const cookies = new Cookies();
  const removeCookie = () => {
    cookies.remove('user_id');

  };
  return (
    <>
    <header className="flex w-full flex-col fixed px-4 py-3 bg-black items-center  border-b border-neutral-700">
    <div className="flex w-full items-center flex-row">
      <img src={Profile} className="w-9 h-9 rounded-full " alt />
      <span className="w-full flex justify-center items-center"> <img src={Logo} alt />
      </span>
      <img src={Logout} onClick={removeCookie} className="w-9 h-9 rounded-full " alt />
      
      </div>
   
   <ForyouAndFollowing/>
 
  </header>
  </>
  )
}

export default HomePageHeader