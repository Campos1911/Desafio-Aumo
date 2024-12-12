"use client";

import { useStateContext } from "@/context/StateContext";
import Image from "next/image";

const DropdownCard = ({
  userImage,
  username,
  userEmail,
}: {
  userImage: string;
  username: string;
  userEmail: string;
}) => {
  const { state, setState } = useStateContext();
  const handleUnfollow = (email: string) => {
    localStorage.removeItem(email);
    setState({ triggerFollow: !state.triggerFollow });
  };
  return (
    <div className="w-full flex gap-3 items-center">
      <section className="w-[15%]">
        <Image
          src={userImage === "" || null ? "/images/userIcon2.jpg" : userImage}
          alt="User image"
          height={100}
          width={100}
          className="rounded-full"
        />
      </section>
      <section className="w-[60%]">
        <p>{username}</p>
      </section>
      <section className="w-[30%] flex justify-end">
        <button
          onClick={() => handleUnfollow(userEmail)}
          className="text-white bg-red-500 p-1 rounded-md hover:bg-red-900 duration-200"
        >
          Unfollow
        </button>
      </section>
    </div>
  );
};

export default DropdownCard;
