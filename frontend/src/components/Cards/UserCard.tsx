import React from "react";

const UserCard = () => {
  return (
    <div className="flex flex-col w-[80%] h-full items-center border">
      <div className="h-28 bg-green-500 w-full flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-white border-2 absolute translate-y-4"></div>
      </div>
      <div className="flex flex-col gap-5 h-40 bg-white w-full">
        <div className="flex w-full justify-between mt-9">
          {/*Section invisível usada para alinhamento*/}
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
