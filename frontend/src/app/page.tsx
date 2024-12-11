"use client";

import { randomUserProps } from "@/@types";
import { InfosCard, UserCard } from "@/components/Cards";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [randomUser, setRandomUser] = useState<randomUserProps>();

  useEffect(() => {
    const getUser = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}`)
        .then((res) => {
          setRandomUser(res.data.results[0]);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    getUser();
  }, []);

  const tryNextHandler = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}`)
      .then((res) => {
        setRandomUser(res.data.results[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-purple-800">
        <div className="h-30 w-30 p-10 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex text-white justify-center p-5 w-full bg-purple-800 h-36">
        <p onClick={() => console.log(randomUser)} className="text-3xl">
          Find new users like you
        </p>
      </div>
      <div className="w-full flex flex-col gap-2 items-center justify-center absolute translate-y-[-70px]">
        <UserCard
          username={`${randomUser?.name.first} ${randomUser?.name.last}`}
          address={`${randomUser?.location.city}, ${randomUser?.location.country}`}
          perfilImage={`${randomUser?.picture.large}`}
          tryNextHandler={tryNextHandler}
        />
        <div className="grid grid-cols-2 gap-2 w-[80%]">
          <InfosCard
            cardContent="Personal Info"
            bornAt={`${randomUser?.nat}`}
            age={`${randomUser?.registered.age} years`}
          />
          <InfosCard
            cardContent="Contact Info"
            email={`${randomUser?.email}`}
            phone1={`${randomUser?.phone}`}
          />
        </div>
      </div>
    </div>
  );
}
