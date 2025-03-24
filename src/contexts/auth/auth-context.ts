import { createContext } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: VoidFunction;
  logout: VoidFunction;
  register: VoidFunction;
};

export const AuthContext = createContext<AuthContextType | null>(null);
