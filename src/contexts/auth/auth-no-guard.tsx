import { paths } from "@/routes/paths";
import { Navigate } from "react-router-dom";
import { getLastPathnameVisited } from "./pathname-visited";
import { useAuth } from "./use-auth";

type Props = {
  children: React.ReactNode;
};

export const AuthNoGuard = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    const pathname = getLastPathnameVisited() || paths.HOME.ROOT;

    return <Navigate to={pathname} replace />;
  }

  return children;
};
