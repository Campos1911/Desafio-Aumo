"use client";

import React from "react";
import DropdownFollowers from "./DropdownFollowers";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  if (pathname === "/login") {
    return null;
  }
  return (
    <div className="text-white w-full p-5 bg-purple-800 shadow-xl border-b border-purple-900 absolute z-10 flex justify-between">
      <p className="cursor-default">Users_like.me</p>
      <DropdownFollowers />
    </div>
  );
};

export default Header;
