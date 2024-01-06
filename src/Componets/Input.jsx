import React from 'react'
import tick from '../assets/successtick.svg'
import eye from '../assets/eye.svg'
import { useState } from "react";
function Input({type = "Text",placeholder ="Input",namevalue="Name" , imghide = "display", icon="tick",value, onchange,bordercolorprop ="blue"}) {


let IconType = {
 
  "tick": tick,
  "eye": eye

}


let imgbase = `w-6  h-6 ${imghide} `

let inputclass = `w-full caret-#1D9BF0  bg-transparent outline-none text-neutral-50 font-inter text-xl not-italic font-normal leading-normal `

let bordercolor = {
  "blue":"border-twitter-blue",
  "red":"border-Error",


}




let fieldsetclass = `flex w-full  pb-4 pt-2 px-3 group items-center gap-2.5 border-1px rounded-0.25rem focus-within:${bordercolor[bordercolorprop]} border-neutral-500 `


function handelchange(e){

  console.log("changing value :",e.target.name)
  //  const newcred =  placeholder === "Name" ? {...value,name:value}: {...value,email:value}
  //  onChange(newcred);

  onchange(e.target.value)

 
   
   
}

  return (
    <>
    <fieldset className={fieldsetclass}>
    <legend className="text-neutral-500 font-inter text-xs not-italic font-medium leading-normal group-focus-within:text-twitter-blue  "> <div className="py-0 px-1 ">{namevalue}</div></legend>
    <input   onChange={handelchange} value={value} className={inputclass} type={type} placeholder={placeholder} />
    <img className= {imgbase} src={IconType[icon]} alt />
   
  </fieldset>

  
  </>
  )
}

export default Input