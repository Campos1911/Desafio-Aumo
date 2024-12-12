"use client";

import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownCard } from "../Cards";
import { ItemStorage } from "@/@types";
import { useStateContext } from "@/context/StateContext";
import { FaChevronDown } from "react-icons/fa";

const DropdownFollowers = () => {
  const [followingEmails, setFollowingEmails] = useState<
    { chave: string; dados: ItemStorage }[]
  >([]);
  const { state } = useStateContext();

  useEffect(() => {
    const padrao = /.*@.*\.com/; // Padrão utilizado para achar as chaves do tipo 'email'
    const itensEncontrados: { chave: string; dados: ItemStorage }[] = [];
    for (let i = 0; i <= localStorage.length; i++) {
      const chave = localStorage.key(i);
      if (chave && padrao.test(chave)) {
        const valor: string | null = localStorage.getItem(chave);
        if (valor) {
          try {
            const dados: ItemStorage = JSON.parse(valor);
            itensEncontrados.push({ chave, dados });
          } catch (error) {
            console.error("Erro ao fazer parse do JSON", error);
          }
        }
      }
    }
    setFollowingEmails(itensEncontrados);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none mr-10 flex items-center gap-3">
        {`Following ${followingEmails.length} users`} <FaChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96">
        {followingEmails.map((user, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => console.log(followingEmails)}
          >
            <DropdownCard
              userImage={user.dados.perfilImage}
              username={user.dados.username}
              userEmail={user.chave}
            />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownFollowers;
