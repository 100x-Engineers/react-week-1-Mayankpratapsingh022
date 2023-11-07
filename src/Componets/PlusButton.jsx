import React from 'react'
import Plus from '../assets/plus.svg'
function PlusButton() {
  return (

    <button className="inline-flex bottom-20 right-4 fixed  p-4 items-end gap-2.5 rounded-full bg-#1D9BF0">
      <img src={Plus} alt />
    </button>

  )
}

export default PlusButton