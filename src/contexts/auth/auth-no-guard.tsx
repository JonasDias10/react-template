import { Navigate } from "react-router-dom";
import { useAuth } from "./use-auth";
import { paths } from "@/routes/paths";
import { getLastPathname } from "./pathname";

type Props = {
  children: React.ReactNode;
};

export const AuthNoGuard = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    const pathname = getLastPathname() || paths.HOME.ROOT;

    return <Navigate to={pathname} replace />;
  }

  return children;
};
