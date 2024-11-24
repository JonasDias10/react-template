import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./use-auth";
import { paths } from "@/routes/paths";
import { setLastPathname } from "./pathname";

type Props = {
  children: React.ReactNode;
};

export const AuthGuard = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();

  const { pathname } = useLocation();

  if (!isAuthenticated) {
    setLastPathname(pathname);

    return <Navigate to={paths.LANDING} replace />;
  }

  return children;
};
