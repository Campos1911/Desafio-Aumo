import { randomUserProps } from "@/@types";
import { useStateContext } from "@/context/StateContext";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

const SuggestionsCard = ({
  sugestion,
  sugestionsSaved,
  setSugestions,
}: {
  sugestion: randomUserProps;
  sugestionsSaved: randomUserProps[];
  setSugestions: Dispatch<SetStateAction<randomUserProps[]>>;
}) => {
  const { state, setState } = useStateContext();
  const handleFollow = () => {
    const username = `${sugestion.name.first} ${sugestion.name.last}`;
    const perfilImage = `${sugestion.picture.large}`;
    localStorage.setItem(
      sugestion.email,
      JSON.stringify({ username, perfilImage })
    );
    setSugestions((prevItens) =>
      prevItens.filter((item) => item.email !== sugestion.email)
    );
    localStorage.removeItem("sugestions");
    localStorage.setItem("sugestions", JSON.stringify(sugestionsSaved));
    setState({ triggerFollow: !state.triggerFollow });
  };
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full p-3 rounded-md border shadow-lg">
      <Image
        className="rounded-full"
        src={`${sugestion.picture.large}`}
        alt="User default image"
        width={60}
        height={60}
      />
      <p className="text-center">
        {sugestion.name.first} {sugestion.name.last}
      </p>
      <p className="text-sm">{sugestion.location.country}</p>
      <button
        onClick={handleFollow}
        className="bg-blue-500 p-1 rounded-md text-white"
      >
        Follow
      </button>
    </div>
  );
};

export default SuggestionsCard;
