"use client";

import { randomUserProps } from "@/@types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SuasInfos = () => {
  const [userInfo, setUserInfo] = useState<randomUserProps>({
    cell: "",
    dob: { date: "", age: 0 },
    email: "",
    gender: "",
    id: { name: "", value: "" },
    location: {
      street: { number: 0, name: "" },
      city: "",
      state: "",
      country: "",
      postcode: 0,
    },
    login: { uuid: "", username: "", password: "" },
    nat: "",
    phone: "",
    picture: { large: "", medium: "", thumbnail: "" },
    registered: { date: "", age: 0 },
    name: { title: "", first: "", last: "" },
  });

  const router = useRouter();

  const handleEntrar = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
    try {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="bg-purple-800 h-screen flex items-center justify-center">
      <form className="flex flex-col items-center justify-center w-[40%] bg-white p-5 rounded-lg gap-3 shadow-md">
        <p className="text-3xl text-purple-600">Users_like.me</p>
        <section className="w-full">
          <p>Seu nome</p>
          <input
            onChange={(e) =>
              setUserInfo({
                ...userInfo,
                name: {
                  title: "",
                  first: e.target.value,
                  last: userInfo.name.last,
                },
              })
            }
            type="text"
            className="w-full shadow-lg border border-purple-700 rounded-lg p-1 outline-none"
          />
        </section>
        <section className="w-full flex gap-2">
          <section className="w-[50%]">
            <p>Sua idade</p>
            <input
              type="number"
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  registered: {
                    age: parseInt(e.target.value),
                    date: userInfo.registered.date,
                  },
                })
              }
              className="w-full shadow-lg border border-purple-700 rounded-lg p-1 outline-none"
            />
          </section>
          <section className="w-[50%]">
            <p>País que nasceu:</p>
            <input
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  nat: e.target.value,
                  location: {
                    street: {
                      number: userInfo.location.street.number,
                      name: userInfo.location.street.name,
                    },
                    city: userInfo.location.city,
                    state: userInfo.location.state,
                    country: e.target.value,
                    postcode: userInfo.location.postcode,
                  },
                })
              }
              type="text"
              className="w-full shadow-lg border border-purple-700 rounded-lg p-1 outline-none"
            />
          </section>
        </section>
        <section className="w-full flex gap-2">
          <section className="w-[50%]">
            <p>Seu email:</p>
            <input
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              type="text"
              className="w-full shadow-lg border border-purple-700 rounded-lg p-1 outline-none"
            />
          </section>
          <section className="w-[50%]">
            <p>Seu telefone:</p>
            <input
              onChange={(e) =>
                setUserInfo({ ...userInfo, phone: e.target.value })
              }
              type="text"
              className="w-full shadow-lg border border-purple-700 rounded-lg p-1 outline-none"
            />
          </section>
        </section>
        <section className="w-full flex gap-2">
          <section className="w-full">
            <p>Cidade que reside:</p>
            <input
              onChange={(e) =>
                setUserInfo({
                  ...userInfo,
                  location: {
                    street: {
                      number: userInfo.location.street.number,
                      name: userInfo.location.street.name,
                    },
                    city: e.target.value,
                    state: userInfo.location.state,
                    country: userInfo.location.country,
                    postcode: userInfo.location.postcode,
                  },
                })
              }
              type="text"
              className="w-full shadow-lg border border-purple-700 rounded-lg p-1 outline-none"
            />
          </section>
        </section>
        <button
          onClick={handleEntrar}
          className="p-3 px-8 rounded-lg bg-purple-800 text-white hover:bg-purple-950 duration-200"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default SuasInfos;
