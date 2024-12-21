import { Theme } from "@mui/material";
import { createContext } from "react";

export type ThemeMode = "light" | "dark";

export type ThemeContextType = {
  mode: ThemeMode;
  toggleMode: () => void;
  theme: Theme;
  isDarkMode: boolean;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
