import React ,{useContext} from "react";
import Steps from "../../Componets/Steps";
import Heading from "../../Componets/Heading";
import Input from "../../Componets/Input";
import Button from "../../Componets/Button";
import LoginButton from "../../Componets/LoginButton";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContextProvider";

function CreateAccountStepII() {

  const { user} = useContext(UserContext);

let birthinfo = `${user.birthdate} ${user.birthmonth} ${user.birthyear} `

const SendMail = async()=>{

  await  fetch(`http://localhost:3000/SendMail`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        email:user.email,
      
    })
 }) 


}

  const PlaceholderValues = {
    [user.name]: "Name",
    [user.email]: "Email",
    [birthinfo]: "Date of Birth",
  };
  const values = Object.keys(PlaceholderValues);

  return (
    <div className="bg-Neutral/1000 w-screen flex flex-col px-0.9375rem pb-5 pt-0 h-screen gap-3 items-center">
      <Steps no="2" />
      <main className="flex flex-col  justify-between w-full   gap-5 self-stretch ">
        <Heading text="Create your account" />


        {values.map((value) => {
          return <Input value={value} namevalue={PlaceholderValues[value]}  type={PlaceholderValues[value]} />;
        })}


      </main>
   {/* <button>hello</button> */}
     <button onClick={SendMail} > <Link to="/step-3">  <LoginButton button ="button-blue"   text="Sign up"/> </Link></button> 
    </div>
  );
}

export default CreateAccountStepII;
