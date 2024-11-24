import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { HomeLayout } from "@/layouts/home";
import { AuthGuard } from "@/contexts/auth/auth-guard";
import { LoadingScreen } from "@/components/loading";

import { AccountPage, HomePage, UsersPage } from "./lazy-pages";
import { paths } from "./paths";

export const homeRoutes = [
  {
    element: (
      <AuthGuard>
        <HomeLayout>
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
        </HomeLayout>
      </AuthGuard>
    ),
    children: [
      {
        path: paths.HOME.ROOT,
        element: <HomePage />,
        index: true
      },
      {
        path: paths.HOME.USERS,
        element: <UsersPage />
      },
      {
        path: paths.USER.ACCOUNT,
        element: <AccountPage />
      }
    ]
  }
];
