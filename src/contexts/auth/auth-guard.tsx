import { paths } from "@/routes/paths";
import { Navigate, useLocation } from "react-router-dom";
import { setLastPathnameVisited } from "./pathname-visited";
import { useAuth } from "./use-auth";

type Props = {
  children: React.ReactNode;
};

export const AuthGuard = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();

  const { pathname } = useLocation();

  if (!isAuthenticated) {
    setLastPathnameVisited(pathname);

    return <Navigate to={paths.LANDING} replace />;
  }

  return children;
};
