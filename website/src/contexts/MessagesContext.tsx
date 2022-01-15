import { createContext, ReactNode } from "react";


type MessagesContextType = {

}

type MessagesContextProviderProps = {
  children: ReactNode;
}

type MessageType = {
  id: number;
  message: string;
  hour: string;
}

export const MessagesContext = createContext( {} as MessagesContextType)

export function MessagesContextProvider({children}: MessagesContextProviderProps) {


  return (
    <MessagesContext.Provider value={{}}>
      {children}
    </MessagesContext.Provider>
  );
}