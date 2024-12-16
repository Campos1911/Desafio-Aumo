"use client";

import { randomUserProps } from "@/@types";
import { InfosCard, SuggestionsCard, UserCard } from "@/components/Cards";
import { Loading } from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [following, setFollowing] = useState<boolean>(false);
  const [randomUser, setRandomUser] = useState<randomUserProps>();
  const [sugestions, setSugestions] = useState<randomUserProps[]>([]);

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
    setLoading(true);
    if (!following) {
      setSugestions([randomUser as randomUserProps, ...sugestions]);
    }
    await axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}`)
      .then((res) => {
        setRandomUser(res.data.results[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  useEffect(() => {
    const followingTheUser = localStorage.getItem(
      randomUser?.id.value as string
    );
    if (followingTheUser === null) {
      setFollowing(false);
    } else setFollowing(true);
  }, [randomUser?.id]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="pt-16">
      <div className="flex text-white justify-center p-5 w-full bg-purple-800 h-36">
        <p className="md:text-3xl text-2xl">Find new users like you</p>
      </div>
      <div className="w-full flex flex-col gap-2 items-center justify-center absolute translate-y-[-70px] xl:pb-0 pb-10">
        <UserCard
          username={`${randomUser?.name.first} ${randomUser?.name.last}`}
          address={`${randomUser?.location.city}, ${randomUser?.location.country}`}
          perfilImage={`${randomUser?.picture.large}`}
          following={following}
          setFollowing={setFollowing}
          userEmail={`${randomUser?.email}`}
          tryNextHandler={tryNextHandler}
        />
        <div className="grid md:grid-cols-2 gap-2 w-[80%]">
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
        <div className="w-[80%] flex flex-col gap-3 py-4">
          <p className="text-2xl">Sugestions 4 you:</p>
          <div className="grid grid-cols-5 w-full gap-2 grid-rows-1 overflow-hidden">
            {sugestions.slice(0, 5).map((sugestion, index) => (
              <SuggestionsCard
                key={index}
                sugestion={sugestion}
                setSugestions={setSugestions}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
