import React from 'react'

function ForyouAndFollowing() {
  return (
    <section className=" flex pt-5 px-20 pb-0 justify-around items-center gap-40 self-stretch border-b border-neutral-700 ">
    <div className="flex flex-col justify-center items-center gap-4 w-full h-full hover:bg-neutral-800 ">
      <p className="font-inter text-4 not-italic font-bold leading-normal text-neutral-50">For&nbsp;you</p>
      <div className="rounded-full bg-#1D9BF0 w-14 h-1" /> </div>
    <div className="flex flex-col justify-center items-center gap-4 w-full h-full hover:bg-neutral-800 ">
      <p className="font-inter text-4 not-italic font-medium leading-normal text-neutral-400">Following</p>
      <div className="rounded-full bg-#1D9BF0 w-14 h-1 invisible" />
    </div>
  </section>
  )
}

export default ForyouAndFollowing