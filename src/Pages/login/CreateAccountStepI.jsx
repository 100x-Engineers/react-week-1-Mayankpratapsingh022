import React, { useContext, useState } from "react";
import Input from "../../Componets/Input";
import Steps from "../../Componets/Steps";
import Heading from "../../Componets/Heading";
import DatePicker from "../../Componets/DatePicker";
import Button from "../../Componets/Button";
import LoginButton from "../../Componets/LoginButton";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContextProvider";

function CreateAccountStepI() {
 
  const { user, setuser } = useContext(UserContext);
  const BASE_URL = import.meta.env.VITE_FETCH_URL
// fetch(`/login`,{
// method:"POST",
// headers:{
//   "Content-Type":"application/json",

// },
// body:JSON.stringify({
//   email:"he@example.com",
//   password:"1234"
// })

// }).then((response)=>response.json()).then((json)=>console.log(json));




function handelsetemail(value) {
  setuser({
    ...user,
    email: value,
  });
}

function handelsetname(value) {
  setuser({
    ...user,
    name: value,
  });
}






  console.log(user);
  return (
    <div className="bg-Neutral/1000 w-screen flex flex-col px-0.9375rem pb-5 pt-0 h-screen gap-3 items-center">
      <Steps no="1" />
      <main className="flex flex-col  justify-between w-full   gap-5 self-stretch ">
        <Heading text="Create your account" />

        <Input
          placeholder="Name"
          name="name"
          value={user.name}
          onchange={handelsetname}
          type="Text"
          namevalue="Name"
          imghide="hidden"
          
        />

        <Input
          placeholder="Email"
          name="email"
          value={user.email}
          onchange={handelsetemail}
          type="Email"
          namevalue="Email"
          imghide="hidden"
        />

        <DatePicker />
      </main>

      <Link to="/step-2">
        {" "}
               <LoginButton />
      </Link>
    </div>
  );
}

export default CreateAccountStepI;
