import { createContext } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  register: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);