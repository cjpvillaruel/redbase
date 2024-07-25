import { Bars4Icon } from "@heroicons/react/16/solid";
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-zinc-950 text-white p-4 h-12 flex items-center">
      <div className="flex justify-between w-full items-center">
        <Bars4Icon className="size-6" />
        <h2 className="text-xl">RedBase</h2>
        <h2 className="text-md">Logout</h2>
      </div>
    </div>
  );
};
export default Header;
