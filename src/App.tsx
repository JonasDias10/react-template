import { SnackbarProvider } from "notistack";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/auth/auth-provider";
import { Routes } from "./routes";
import { ThemeProvider } from "./theme/theme-provider";

export function App() {
  return (
    <HelmetProvider>
      <SnackbarProvider autoHideDuration={3000} anchorOrigin={{ vertical: "top", horizontal: "left" }}>
        <AuthProvider>
          <ThemeProvider>
            <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
              <Routes />
            </BrowserRouter>
          </ThemeProvider>
        </AuthProvider>
      </SnackbarProvider>
    </HelmetProvider>
  );
}
