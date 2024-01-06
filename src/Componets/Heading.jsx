import React from 'react'

function Heading({text = "This is default Heading"}) {

 const base = "text-neutral-50 font-inter font-bold text-2xl";    
  return (
    <section>
    <h1 className={base}>{text}</h1>
  </section>  
  )
}

export default Heading