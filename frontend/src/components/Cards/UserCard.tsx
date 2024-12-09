import React from "react";

const UserCard = () => {
  return (
    <div className="flex flex-col w-[80%] items-center border">
      <div className="h-[40%] bg-green-500 w-full">oi</div>
      <div className="flex flex-col gap-5 h-[60%] bg-white w-full">
        <div className="flex w-full justify-between mt-5">
          <section className="w-[33%]"></section>
          <section className="w-[33%] flex justify-center">
            <button className="bg-blue-500 text-white p-2 rounded-sm w-[50%]">
              Follow
            </button>
          </section>
          <section className="w-[33%] flex justify-center">
            <button className="border border-gray-400 p-2 rounded-sm w-[50%]">
              Try the next one
            </button>
          </section>
        </div>
        <div className="flex flex-col w-full items-center">
          <p className="text-2xl">First + Last name</p>
          <p className="font-bold">city, country</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
