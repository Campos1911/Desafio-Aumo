import React from "react";

const InfosCard = () => {
  return (
    <div className="w-full flex flex-col gap-2 border rounded-sm p-5">
      <p className="font-semibold text-lg">Personal Info</p>
      <p className="text-gray-600 text-sm">Born at: US</p>
      <p className="text-gray-600 text-sm">Age: 24 years old</p>
    </div>
  );
};

export default InfosCard;
