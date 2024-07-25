import React from "react";

const Header = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 h-12 flex items-center"
      style={{ background: "#323639" }}
    >
      <div>
        <h2 className="text-2xl">My App</h2>
      </div>
    </div>
  );
};
export default Header;
