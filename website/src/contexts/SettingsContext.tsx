import { createContext, ReactNode, useState } from "react";
import { Loader } from "../components/Loader";
import { useClient } from "../hooks/useClient";
import { useFetch } from "../hooks/useFetch";
import { api } from "../services/api";


type SettingsContextType = {
  isShowSettings : boolean;
  handleShowSettings : (value: boolean) => void;
  handleDeletePublisher : (id_publisher: string) => void;
  publishers: PublishType [];
}

type SettingsContextProviderProps = {
  children : ReactNode;
}
type PublishType = {
  id: string;
  publish: string;
  topic: string;
  oos: number;
  color: string;
  id_client: string;
}

export const SettingsContext = createContext ({} as SettingsContextType);

export function SettingsContextProvider ({children} : SettingsContextProviderProps) {

  const [ isShowSettings, setShowSettings ] = useState(false);
  const { currentClient } = useClient();
  const { data: publishers, error } = useFetch <PublishType [] >(`publishers/${currentClient?.id}`)

  if (!publishers || error) {
    return <Loader title="Loadind publishers topics" />
  }

  async function handleDeletePublisher(id_publisher: string) {
    await api.delete(`publishers/${id_publisher}`)
  }

  function handleShowSettings(value: boolean) {
    setShowSettings(value);
  }

  return (
    <SettingsContext.Provider value={{ isShowSettings,
                                       handleShowSettings,
                                       handleDeletePublisher,
                                       publishers
                                      }}>
      {children}
    </SettingsContext.Provider>
  );
}