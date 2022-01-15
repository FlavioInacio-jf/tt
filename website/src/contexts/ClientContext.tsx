import { createContext, ReactNode, useState } from "react";
import { Loader } from "../components/Loader";

import { useFetch } from "../hooks/useFetch";
import { api } from "../services/api";


type ClientType = {
  id: number;
  name: string;
  client: string;
  protocol: string;
  password: string;
  host: string;
  isWorking: boolean;
  icon: number;
}


type ClientContextType = {
  clients: ClientType[];
  currentClient: ClientType | undefined;
  setCurrentClient: (client: ClientType) => void;
  handleShowClient: (id: number) => void;
  handleDeleteClient: (currentClient: ClientType) => void;
}

type ClientContextProviderProps = {
  children: ReactNode;
}


export const ClientContext = createContext({} as ClientContextType)

export function ClientContextProvider({ children }: ClientContextProviderProps) {

  const [currentClient, setCurrentClient] = useState<ClientType>();

  const { data: clients, error } =  useFetch<ClientType [] >("clients")

  if (!clients || error) {
    return <Loader title="Loading clients..." />
  }

  async function handleShowClient(id: number) {
    await api.get<ClientType>(`clients/${id}`)
    .then(response => {
      setCurrentClient(response.data || currentClient)
    })
  }

  async function handleDeleteClient (currentClient: ClientType) {
    let id = currentClient.id;
    setCurrentClient(undefined);
    await api.delete(`clients/${id}`)
  }

  return (
    <ClientContext.Provider value={
      { clients,
        currentClient,
        handleShowClient,
        setCurrentClient,
        handleDeleteClient }}>
      {children}
    </ClientContext.Provider>
  );
}