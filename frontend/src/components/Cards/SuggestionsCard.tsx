import React from "react";

const SuggestionsCard = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full p-3 rounded-md shadow-lg">
      <div className="w-16 h-16 bg-gray-600 rounded-full" />
      <p>Nome do user</p>
      <p className="text-sm">Description</p>
      <button className="bg-blue-500 p-1 rounded-md text-white">Follow</button>
    </div>
  );
};

export default SuggestionsCard;
