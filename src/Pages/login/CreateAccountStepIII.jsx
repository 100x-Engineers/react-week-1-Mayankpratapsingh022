import React, { useState ,useContext} from "react";
import Steps from "../../Componets/Steps";
import Heading from "../../Componets/Heading";
import Input from "../../Componets/Input";
import Paragraph from "../../Componets/Paragraph";
import LoginButton from "../../Componets/LoginButton";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContextProvider";

function CreateAccountStepIII({}) {
  const [otp,setotp]= useState("");
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const email = user.email;

  const [inputboxui,setinputboxui] = useState("code");



  const verfiyMail =  async ()=>{

  const response = await  fetch(`${import.meta.env.VITE_FETCH_URL}/verifyMail`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        otp:otp,
      
    })
 }) 

 if(response.status == 230){
 navigate("/step-4")
  
 }else{
  setinputboxui("You entered wrong code")
 }


  }




  return (
    <>
      <div className="bg-Neutral/1000 w-full  flex flex-col px-0.9375rem  pb-5 pt-0  h-screen gap-3 items-center relative ">
        <Steps no="3" />
        <main className="flex flex-col   justify-between    gap-5 self-stretch ">
          <Heading text="We sent you a code" />
          <Paragraph text={`Enter it below to verify ${email}`} color="default" />
          <section className="flex flex-col items-end gap-3  self-stretch">
            <Input onchange={(value)=> {setotp(value)}} namevalue={inputboxui} value={otp}  placeholder="Verification code" icon="eye" />

            <Paragraph text="Didn’t receive a code?" color="colorBlue" />
          </section>
          <section className=" flex  pt-20 px-4 flex-col items-center self-stretch  "></section>
        </main>
        <section className=" flex  pt-20 px-4 flex-col justify-end absolute bottom-5 right-0 left-0 items-center self-stretch  ">
      <button onClick={verfiyMail}>      <LoginButton text="Next" /></button>
        </section>
      </div>
    </>
  );
}

export default CreateAccountStepIII;
