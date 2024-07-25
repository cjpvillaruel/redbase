import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SideBar = () => {
  return (
    <div className="fixed top-12 left-0 h-full w-12 bg-gray-800 text-white p-4">
      <ul className="flex flex-col items-center">
        <li className="mb-2">
          <a href="#" className="hover:underline">
            <MagnifyingGlassIcon className="size-6 mb-5 " />
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            <MagnifyingGlassIcon className="size-6 mb-5" />
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            <MagnifyingGlassIcon className="size-6 mb-5" />
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            <MagnifyingGlassIcon className="size-6 mb-5" />
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            <MagnifyingGlassIcon className="size-6 mb-5" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
