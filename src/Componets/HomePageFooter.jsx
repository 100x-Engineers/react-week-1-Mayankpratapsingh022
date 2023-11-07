import React from 'react'
import Profile from '../assets/profile.svg'
import Home from '../assets/home.svg'
import Toast from './Toast'
import { Link } from 'react-router-dom'
function HomePageFooter() {
  return (
    <footer className="flex w-full fixed bg-black bottom-0 py-1.125rem px-6 justify-center items-center gap-10 border-t border-neutral-800">
    
     <Toast text='Copied to clipboard.'/>
     <Link to="/home">
    <img src={Home} alt="home" /></Link>
  <Link to="/UserProfile">
      <img src={Profile} alt="profile" />
</Link>
  </footer>
  )
}

export default HomePageFooter