import React from 'react'
import Steps from "../../Componets/Steps";
import Heading from "../../Componets/Heading";
import Input from "../../Componets/Input";
import Paragraph from "../../Componets/Paragraph";
import LoginButton from "../../Componets/LoginButton";
import { Link } from 'react-router-dom';
function CreateAccountStepIV() {
  return (
    <>
    <div className="bg-Neutral/1000 w-full  flex flex-col px-0.9375rem  pb-5 pt-0  h-screen gap-3 items-center relative ">
      <Steps no="4" />
      <main className="flex flex-col   justify-between    gap-5 self-stretch ">
        <Heading text="You’ll need a password" />
        <Paragraph text="Make sure it’s 8 characters or more" color="default" />

        <section className="flex flex-col items-end gap-3  self-stretch">
          <Input placeholder="Password" icon="eye"/>

          <Paragraph text="Didn’t receive a code?" color="colorBlue" />
        </section>
        <section className=" flex  pt-20 px-4 flex-col items-center self-stretch  "></section>
      </main>
      <section className=" flex  pt-20 px-4 flex-col justify-end absolute bottom-5 right-0 left-0 items-center self-stretch  ">
      <Link to="/home">    <LoginButton text="Next" /></Link>
      </section>
    </div>
  </>
  )
}

export default CreateAccountStepIV