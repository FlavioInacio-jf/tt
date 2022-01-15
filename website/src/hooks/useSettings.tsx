import { useContext } from "react";
import { SettingsContext } from "../contexts/SettingsContext";

export function useSettings () {
  const value = useContext (SettingsContext);

  return value;
}