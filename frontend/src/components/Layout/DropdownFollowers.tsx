import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownCard } from "../Cards";

const DropdownFollowers = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none mr-10">
        Open
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96">
        <DropdownMenuItem>
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
