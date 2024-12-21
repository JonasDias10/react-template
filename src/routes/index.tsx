import { useRoutes } from "react-router-dom";

import { AuthNoGuard } from "@/contexts/auth/auth-no-guard";

import { LandingPage } from "@/pages";
import { NotFoundPage } from "@/pages/not-found";

import { homeRoutes } from "./home";
import { authRoutes } from "./auth";
import { paths } from "./paths";

export function Routes() {
  return useRoutes([
    {
      path: paths.LANDING,
      element: (
        <AuthNoGuard>
          <LandingPage />
        </AuthNoGuard>
      )
    },

    ...homeRoutes,

    ...authRoutes,

    { path: paths.NOT_FOUND, element: <NotFoundPage /> }
  ]);
}
