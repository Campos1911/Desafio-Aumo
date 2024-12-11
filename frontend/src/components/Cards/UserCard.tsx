import { UserCardProps } from "@/@types";
import Image from "next/image";
import React from "react";

const UserCard = ({ username, address }: UserCardProps) => {
  return (
    <div className="flex flex-col w-[80%] h-full items-center border">
      <div className="h-28 bg-[url('/images/userIcon2.jpg')] bg-center bg-no-repeat bg-cover w-full flex items-center justify-center">
        <div className="w-32 h-32 flex justify-center items-center rounded-full bg-white border-2 absolute translate-y-4">
          <Image
            className="rounded-full"
            src="/images/userIcon2.jpg"
            alt="User default image"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 h-40 bg-white w-full">
        <div className="flex w-full justify-between mt-9">
          {/*Section invisível usada para alinhamento*/}
          <section className="w-[33%]"></section>
          <section className="w-[33%] flex justify-center">
            <button className="bg-blue-500 text-white p-2 rounded-sm w-[50%] hover:bg-blue-800 hover:shadow-md duration-200">
              Follow
            </button>
          </section>
          <section className="w-[33%] flex justify-center">
            <button className="border border-gray-400 p-2 rounded-sm w-[50%] hover:bg-gray-200 hover:shadow-md duration-200">
              Try the next one
            </button>
          </section>
        </div>
        <div className="flex flex-col w-full items-center">
          <p className="text-2xl">{username}</p>
          <p className="font-bold">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
