import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { ThemeProvider } from "./theme/theme-provider";
import { AuthProvider } from "./contexts/auth/auth-provider";

export function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </HelmetProvider>
  );
}
