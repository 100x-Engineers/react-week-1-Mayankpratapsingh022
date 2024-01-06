import React from "react";

function Button({
  text = "button",
  button = "button-white",
  hide = "display",
  handleclick
}) {
  const buttons = {
    "button-white": "bg-neutral-50 text-neutral-1000 w-full ",
    "button-outline":
      "text-twitter-blue border-signborder border-2 w-full   flex justify-center  items-center self-stretch rounded-borderr ",
    "button-post":
      "flex  py-2 px-6 bg-twitter-blue text-neutral-50 justify-center items-center gap-10px rounded-full text-center font-inter text-base not-italic font-bold leading-normal hover:bg-#1871CA disabled:bg-#1D9BF0 disabled:opacity-50",
  };

  let base = `text-base ${buttons[button]} rounded-full ${hide}   px-6 py-2 font-bold leading-normal  backdrop-blur-xl hover:bg-neutral-200 disabled:pointer-events-none disabled:opacity-25 text-center`;

  return (
    <>
      <button onClick={handleclick}  className={base}>{text}</button>
    </>
  );
}

export default Button;
