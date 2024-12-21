import { useState } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline, GlobalStyles, createTheme } from "@mui/material";

import { ThemeContext, ThemeMode } from "./theme-context";
import { customScrollbarStyle } from "./custom-scroll";
import { Components, palette, shadows, typography } from "./core";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleMode = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  const isDarkMode = mode === "dark";

  const theme = createTheme({
    palette: palette(isDarkMode),
    typography,
    shadows: shadows(isDarkMode),
    shape: { borderRadius: 10 },
    components: Components(isDarkMode)
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, theme, isDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={{ ...customScrollbarStyle({ mode }) }} />

        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
