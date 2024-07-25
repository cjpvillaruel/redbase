import React from "react";
import {
  ArrowUpIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { ArrowsUpDownIcon, PlusCircleIcon } from "@heroicons/react/16/solid";
import { ShieldCheckIcon } from "@heroicons/react/16/solid";

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
            <PlusCircleIcon className="size-6 mb-5" />
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            <LockClosedIcon className="size-6 mb-5" />
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            <ArrowUpIcon className="size-6 mb-5" />
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            <ArrowsUpDownIcon className="size-6 mb-5" />
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            <LockClosedIcon className="size-6 mb-5" />
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            <ShieldCheckIcon className="size-6 mb-5" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
