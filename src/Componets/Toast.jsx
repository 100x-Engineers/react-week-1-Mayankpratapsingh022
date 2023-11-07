import React from 'react'

function Toast({text = "Toast message"}) {
  return (
    <div className="flex px-8 py-3 justify-center absolute -translate-y-16 items-center gap-2.5 rounded-full bg-Searchbar-fill ">
    <p className="font-inter text-neutral-50 text-0.9375rem font-normal ">{text}</p>
  </div>
  )
}

export default Toast