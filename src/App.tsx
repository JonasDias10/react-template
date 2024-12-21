import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import { ThemeProvider } from "./theme/theme-provider";
import { AuthProvider } from "./contexts/auth/auth-provider";
import { SnackbarProvider } from "notistack";

export function App() {
  return (
    <HelmetProvider>
      <SnackbarProvider autoHideDuration={3000} anchorOrigin={{ vertical: "top", horizontal: "left" }}>
        <AuthProvider>
          <ThemeProvider>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </ThemeProvider>
        </AuthProvider>
      </SnackbarProvider>
    </HelmetProvider>
  );
}
