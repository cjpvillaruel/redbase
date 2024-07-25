import React from "react";
const Button = ({ children, variant, className }) => {
  const defaultClasses =
    "font-semibold py-2 px-4 rounded-md flex text-sm items-center";
  let buttonClass = `bg-sky-500 hover:bg-sky-600 text-white`;

  if (variant === "secondary") {
    buttonClass =
      "text-sky-500 bg-transparent hover:bg-sky-500 hover:text-white border border-sky-500 border-width-1";
  } else if (variant === "danger") {
    buttonClass = `bg-red-500 hover:bg-red-700 text-white`;
  } else if (variant === "text") {
    buttonClass = `text-blue-500 hover:text-sky-500`;
  }

  return (
    <button className={`${defaultClasses} ${buttonClass} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
