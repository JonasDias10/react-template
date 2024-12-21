import { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./auth-context";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(() => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  }, []);

  const register = useCallback(() => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  }, []);

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (auth) {
      setIsAuthenticated(true);
    }
  }, []);

  const memorizedValue = useMemo(
    () => ({ isAuthenticated, login, logout, register }),
    [isAuthenticated, login, logout, register]
  );

  return <AuthContext.Provider value={memorizedValue}>{children}</AuthContext.Provider>;
};
