import React from "react";

interface InfosCardProps {
  cardContent: string;
  bornAt?: string;
  email?: string;
  age?: string;
  phone1?: string;
}

const InfosCard = ({
  cardContent,
  bornAt,
  email,
  age,
  phone1,
}: InfosCardProps) => {
  return (
    <div className="w-full flex flex-col gap-2 border rounded-sm p-5 hover:bg-gray-100 duration-200">
      <p className="font-semibold text-lg">{cardContent}</p>
      <p className="text-gray-600 text-sm">
        {cardContent === "Personal Info"
          ? `Born at: ${bornAt}`
          : `Email: ${email}`}
      </p>
      <p className="text-gray-600 text-sm">
        {cardContent === "Personal Info" ? `Age: ${age}` : `Phone 1: ${phone1}`}
      </p>
    </div>
  );
};

export default InfosCard;
