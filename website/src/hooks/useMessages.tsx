import { useContext } from "react";
import { MessagesContext } from "../contexts/MessagesContext";


export function useMessages () {
  const value = useContext (MessagesContext);

  return value;
}