import { useState, } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/100x.svg';
import Button from '../Componets/Button';
import { Link } from 'react-router-dom';
function App() {

  
const navigate = useNavigate();





  return (
   <div className="bg-Neutral/1000 w-full h-full ">
  <header className="flex w-full py-3 px-4  justify-center items-center gap-32">
    <img src={Logo} alt />
  </header>  
  <main className="flex h-screen w-full items-center">
    <section className="flex w-full flex-col gap-10 px-7">
      <section className="flex flex-col gap-3">
        <h1 className="text-1.9375rem  font-inter font-bold leading-norma not-italicl text-neutral-50">
          Happening now
        </h1>
        <p className="text-base font-inter not-italic font-medium leading-normal text-neutral-50">
          Join today.
        </p>
      </section>
<Link to="/step-1"> <Button button="button-white" text="Create account"   /></Link> 


     
      <div className="flex items-center">
        <hr className="mr-2 flex-grow border-t-2 border-neutral-700" />
        <span className="text-16 font-regular leading-normal text-neutral-50">or</span>
        <hr className="ml-2 flex-grow border-t-2 border-neutral-700" />
      </div>
      <section className="flex flex-col gap-5">
        <p className="text-0.9375rem font-medium leading-normal not-italic font-inter text-neutral-50">
          Already have an account?
        </p>
       <div onClick= {()=> navigate("/SignInEmail")} ><Button button="button-outline" text="Sign up"   /></div> 


      </section>
    </section>
  </main>
</div>

  )
}

export default App
