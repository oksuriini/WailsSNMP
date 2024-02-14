import { createContext, SetStateAction } from "react";

export interface SwitchListContextType {
  name: string;
  ip: string;
  community: string;
}

export const SwitchListContext = createContext<SwitchListContextType[]>([]);
