import React from 'react'

function paragraph({text="change the prop value to view it ", color = "default"}) {

 const fontcolor = {

    default:"text-para",
    colorBlue: "text-twitter-blue"
 }

let base = `${fontcolor[color]} font-inter text-0.875rem not-italic font-medium leading-normal`
  return (
    <p className={base}>{text}</p>
  )
}

export default paragraph