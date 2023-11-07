import React from 'react'
import UserProfileHeader from '../../Componets/UserProfileHeader'
import Tweet from '../../Componets/Tweet'
import PlusButton from '../../Componets/PlusButton'
import HomePageFooter from '../../Componets/HomePageFooter'
import { Link } from 'react-router-dom'


function UserProfile() {
  return (
  <>
    <div className='bg-black'>
    <UserProfileHeader/>

    <Tweet/>
    <Tweet/>
    <Tweet/>
    <Tweet/>
    <Link to="/compose-tweet"> <PlusButton/></Link>
    <HomePageFooter/>
    </div>
  </>
  )
}

export default UserProfile