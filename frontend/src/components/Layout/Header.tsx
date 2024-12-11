import React from "react";

const Header = () => {
  return (
    <div className="text-white w-full p-5 bg-purple-800 shadow-xl border-b border-purple-900 absolute z-10 flex justify-between">
      <p className="cursor-default">Users_like.me</p>
      <p>Espaço para following</p>
    </div>
  );
};

export default Header;
