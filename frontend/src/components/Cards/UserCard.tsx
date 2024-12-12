import { UserCardProps } from "@/@types";
import Image from "next/image";
import React from "react";

const UserCard = ({
  username,
  address,
  perfilImage,
  following,
  setFollowing,
  userEmail,
  tryNextHandler,
}: UserCardProps) => {
  const followHandler = () => {
    if (following) {
      localStorage.removeItem(userEmail);
      setFollowing(false);
    } else {
      localStorage.setItem(
        userEmail,
        JSON.stringify({ username, perfilImage })
      );
      setFollowing(true);
    }
  };
  return (
    <div className="flex flex-col w-[80%] h-full items-center border">
      <div
        style={{ backgroundImage: `url(${perfilImage})` }} //Passando inline CSS para usar o fundo dinâmico
        className={`h-28 bg-center bg-no-repeat bg-cover w-full flex items-center justify-center`}
      >
        <div className="w-32 h-32 flex justify-center items-center rounded-full bg-white border-2 absolute translate-y-4">
          <Image
            className="rounded-full"
            src={`${perfilImage}`}
            alt="User default image"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 xl:h-44 lg:h-48 h-60 bg-white w-full">
        <div className="flex flex-col w-full justify-between mt-9 gap-2 md:flex-row">
          {/*Section invisível usada para alinhamento*/}
          <section className="w-[33%]"></section>
          <section className="md:w-[33%] w-full flex justify-center">
            <button
              onClick={followHandler}
              className={`${
                following === true ? "bg-gray-400" : "bg-blue-500"
              } text-white p-2 rounded-sm w-[50%] hover:bg-blue-800 hover:shadow-md duration-200`}
            >
              {following ? "Unfollow" : "Follow"}
            </button>
          </section>
          <section className="md:w-[33%] w-full flex justify-center">
            <button
              onClick={tryNextHandler}
              className="border border-gray-400 p-2 rounded-sm w-[50%] hover:bg-gray-200 hover:shadow-md duration-200"
            >
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
