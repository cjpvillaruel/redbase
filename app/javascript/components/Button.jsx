// create button component  using tailwind with border radius of 2
import React from "react";
const Button = ({ children, variant, className }) => {
  let buttonClass =
    "bg-sky-400 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-md";

  if (variant === "primary") {
    buttonClass =
      "bg-sky-400 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-md";
  } else if (variant === "secondary") {
    buttonClass =
      "text-sky-400 bg-transparent hover:bg-sky-400 hover:text-white font-bold py-2 px-4 rounded-md border border-sky-400 border-width-1";
  } else if (variant === "danger") {
    buttonClass =
      "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md";
  } else if (variant === "text") {
    buttonClass =
      "text-blue-500 hover:text-sky-400 font-bold py-2 px-4 rounded-md";
  }

  return <button className={`${buttonClass} ${className}`}>{children}</button>;
};

export default Button;
