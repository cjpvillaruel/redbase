import React from "react";
const Tag = ({ children }) => {
  return (
    <span className="border border-gray-500 rounded-md px-2 py-1 text-gray-800 text-xs">
      {children}
    </span>
  );
};

export default Tag;
