import React from 'react'

function LoginButton({button ="button-white", text="Create account"}) {

 
const buttons = {

  "button-white":"bg-neutral-50 text-neutral-1000 flex w-full py-2 px-6  bg-neutral-50 hover:bg-neutral-200 justify-center font-bold text-base font-inter items-center gap-10 self-stretch rounded-borderr backdrop-blur-as disabled:bg-neutral-50 disabled:opacity-50 ",
  "button-outline":"text-twitter-blue border-signborder border-2  flex justify-center  items-center self-stretch rounded-borderr ",
  "button-blue":"flex w-full   p-5  bg-twitter-blue hover:bg-#1D9BF0 justify-center font-bold text-base font-inter items-center gap-2.5 self-stretch rounded-borderr backdrop-blur-as disabled:bg-neutral-50 disabled:opacity-50 text-neutral-50" 

}


   
  return (
    <>

<section className=" flex  pt-20 px-4 flex-col justify-end absolute bottom-5 right-0 left-0 items-center self-stretch  ">
    <a className={buttons[button]}>
      {text}
    </a>
  </section>
    </>
  )
}

export default LoginButton