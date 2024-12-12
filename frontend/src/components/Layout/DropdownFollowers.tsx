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

const DropdownFollowers = () => {
  const [followingEmails, setFollowingEmails] = useState<
    { chave: string; dados: ItemStorage }[]
  >([]);

  useEffect(() => {
    const padrao = /.*@.*\.com/; // Pode ser ajustado para corresponder exatamente ao seu padrão
    const itensEncontrados: { chave: string; dados: ItemStorage }[] = [];
    for (let i = 0; i <= localStorage.length; i++) {
      const chave = localStorage.key(i);
      console.log(chave);
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
  }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none mr-10">
        Open
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96">
        <DropdownMenuItem onClick={() => console.log(followingEmails)}>
          <DropdownCard
            userImage=""
            username="Teste 123"
            userEmail="tilje.liseth@example.com"
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownFollowers;
