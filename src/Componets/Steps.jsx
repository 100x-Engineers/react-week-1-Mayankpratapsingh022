import React from "react";
import cancel from "../assets/cancel.svg";

import Button from "./Button";
import { Link } from "react-router-dom";
function Steps({
  no,
  hidetitle = "display",
  hidebutton = "hidden",
  Xbuttondirect = "/",
  logo = cancel,
  Editprofile = " ",
  buttontext = "Post",
  buttonstyle = "button-post",
  buttonlink = "",
  onClickFunction,
}) {
  let base = `text-0.9375rem font-inter ${hidetitle} not-italic leading-normal font-bold text-neutral-50`;
  return (
    <header className=" flex justify-between w-screen pt-3 px-4 sticky top-0 ">
      <span className=" flex  col-span-5  items-center   gap-5 px-3 py-3">
        <Link to={Xbuttondirect}>
          {" "}
          <img className="h-6 w-6" src={logo} />
        </Link>
        <span className={base}>Step {no} of 4</span>
      </span>
      <span className={base}>{Editprofile}</span>
      <Link to={buttonlink}>
        {" "}
        <Button hide={hidebutton} button={buttonstyle} text={buttontext} handleclick={onClickFunction} />
      </Link>
    </header>
  );
}

export default Steps;
