import useSWR from "swr";
import { api } from "../services/api";

export function useFetch<Data = any>(url: string) {
  const { data, error } = useSWR<Data>(url, async(url)=>{
    const response = await api.get<Data>(url)
    return response.data;
  },
  {
    refreshInterval: 1000,
    revalidateOnFocus: false,
    revalidateIfStale: false

  });

  return {data, error};
}