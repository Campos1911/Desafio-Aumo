import React from "react";
import DropdownFollowers from "./DropdownFollowers";

const Header = () => {
  return (
    <div className="text-white w-full p-5 bg-purple-800 shadow-xl border-b border-purple-900 absolute z-10 flex justify-between">
      <p className="cursor-default">Users_like.me</p>
      <DropdownFollowers />
    </div>
  );
};

export default Header;
