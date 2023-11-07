import React,{useContext} from 'react'
import { UserContext } from "../Context/UserContextProvider";
function DatePicker() {

  const { user, setuser } = useContext(UserContext);



  function handelsetbirthday(value) {
    setuser({
      ...user,
      birthdate: value,
    });
  }


  
  function handelsetbirthmonth(value) {
    setuser({
      ...user,
      birthmonth: value,
    });
  }



  function handelsetbirthyear(value) {
    setuser({
      ...user,
      birthyear: value,
    });
  }



  return (
  <>
     <section className="flex flex-col items-start gap-2 self-stretch ">
      <h2 className="text-neutral-50 font-inter text-0.9375rem not-italic font-bold leading-normal">Date of birth</h2>
      <p className="text-para font-inter text-0.875rem not-italic font-medium leading-normal">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
    </section> 
    {/* date fields */}
    <section className="grid grid-cols-4 items-center gap-3 self-stretch">
      {/* year */}
      <fieldset className="flex w-full py-4 px-3 pb-4 group col-span-2  items-center gap-2.5 border-1px rounded-0.25rem focus-within:border-twitter-blue border-neutral-500 ">
        <legend className="text-neutral-500 font-inter text-xs not-italic font-medium leading-normal group-focus-within:text-twitter-blue  "> <div className="flex inline-flex py-0 px-1 ">Month</div></legend>
        <select onChange={(e)=> {handelsetbirthmonth(e.target.value)}} placeholder="Month" className="w-full bg-Neutral/1000 focus:outline-none text-neutral-50 placeholder:text-neutral-500">
          <option>Jan</option>
          <option>Feb</option>
          <option>Mar</option>
          <option>Apr</option>
          <option>May</option>
          <option>Jun</option>
          <option>Jul</option>
          <option>Aug</option>
          <option>Sep</option> 
          <option>Oct</option>
          <option>Nov</option>
          <option>Dec</option>
        </select>
      </fieldset>
      <fieldset className="flex w-full py-4 px-3 pb-4 group items-center gap-2.5 border-1px rounded-0.25rem focus-within:border-twitter-blue border-neutral-500 ">
        <legend className="text-neutral-500 font-inter text-xs not-italic font-medium leading-normal group-focus-within:text-twitter-blue  "> <div className="flex inline-flex py-0 px-1 ">Day</div></legend>
        <select onChange={(e)=> {handelsetbirthday(e.target.value)}} placeholder="Day" className="w-full bg-Neutral/1000 focus:outline-none text-neutral-50 placeholder:text-neutral-500">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </fieldset>
      <fieldset className="flex w-full py-4 px-3 pb-4 group items-center gap-2.5 border-1px rounded-0.25rem focus-within:border-twitter-blue border-neutral-500 ">
        <legend className="text-neutral-500 font-inter text-xs not-italic font-medium leading-normal group-focus-within:text-twitter-blue  "> <div className="flex inline-flex py-0 px-1 ">Year</div></legend>
        <select onChange={(e)=> {handelsetbirthyear(e.target.value)}} placeholder="Year" className="w-full bg-Neutral/1000 focus:outline-none text-neutral-50 placeholder:text-neutral-500">
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
          <option>2017</option>
          <option>2016</option>
          <option>2015</option>
          <option>2014</option>
          <option>2013</option>
          <option>2012</option>
        </select>
      </fieldset>
    </section>
  </>
  )
}

export default DatePicker