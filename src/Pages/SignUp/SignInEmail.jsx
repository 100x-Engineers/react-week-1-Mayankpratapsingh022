import React, { useState ,useContext} from 'react'
import Steps from '../../Componets/Steps'
import Logo from '../../assets/100x.svg'
import HomePageHeader from '../../Componets/HomePageHeader'
import Input from '../../Componets/Input'
import Heading from '../../Componets/Heading'
import Button from '../../Componets/Button'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContextProvider'
function SignInEmail() {

  const {user,setuser} = useContext(UserContext);

  function handelsetemail(value) {
    setuser({
      ...user,
      email: value,
    });
  }


  return (
    <div className="bg-Neutral/1000 w-screen flex flex-col px-0.9375rem pb-5 pt-0 h-screen gap-3 items-center">
  <Steps    hidetitle='hidden'/>

  <div className="bg-Neutral/1000 w-screen flex flex-col  px-0.9375rem pb-5 pt-0 h-screen gap-3 items-center">

      <main className="flex flex-col p-2 h-screen justify-between w-full   gap-5 self-stretch ">
      <section className="flex w-full flex-col gap-10 px-7">
        <Heading text="Sign in to X" />

    
        <Input
          placeholder="Email"
          name="name"
          value={user.email}
          onchange={handelsetemail}
          type="Text"
          namevalue="Email"
          imghide="hidden"
          
        />
         <Link to={"/SignInPassword"}> <Button text='Next' /></Link>  
         <Button text='Forgot password?' button='button-outline' hide='hover:bg-neutral-900'/>
         <p className="text-0.9375rem font-medium leading-normal not-italic font-inter text-neutral-50">
          Don't have an account? <Link to={"/"}><a className='text-twitter-blue'> Sign Up</a></Link> 
        </p>
    
      </section>
    
      </main>


    </div>
    
    </div>
  )
}

export default SignInEmail