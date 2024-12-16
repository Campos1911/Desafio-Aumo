"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Tipos para o estado global
interface State {
  triggerFollow: boolean; // Estado booleano
}

interface StateContextProps {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
}

// Criação do contexto com tipos
const StateContext = createContext<StateContextProps | undefined>(undefined);

// Hook para usar o contexto
export const useStateContext = (): StateContextProps => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};

// Tipo para os filhos do Provider
interface StateProviderProps {
  children: ReactNode;
}

// Provider que envolve a aplicação
export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [state, setState] = useState<State>({ triggerFollow: false });

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
};
