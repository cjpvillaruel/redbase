import React from "react";

const CircularButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      className={`w-6 h-6 p-1 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CircularButton;
