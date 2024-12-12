import React from "react";

const Loading = () => {
  return (
    <div className="w-full absolute z-50 h-screen flex items-center justify-center bg-purple-800">
      <div className="h-30 w-30 p-10 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
    </div>
  );
};

export default Loading;
