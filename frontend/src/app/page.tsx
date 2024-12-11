"use client";

import { randomUserProps } from "@/@types";
import { InfosCard, UserCard } from "@/components/Cards";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [randomUser, setRandomUser] = useState<randomUserProps>();

  useEffect(() => {
    const getUser = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}`)
        .then((res) => setRandomUser(res.data.results[0]))
        .catch((err) => console.log(err));
    };
    getUser();
  }, []);
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
        />
        <div className="grid grid-cols-2 gap-2 w-[80%]">
          <InfosCard
            cardContent="Personal Info"
            bornAt="19 de novembro de 2003"
            age="21 years"
          />
          <InfosCard
            cardContent="Contact Info"
            email="teste@teste.com"
            phone1="XXXXX-XXXX"
          />
        </div>
      </div>
    </div>
  );
}
