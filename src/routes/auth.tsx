import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { AuthLayout } from "@/layouts/auth";
import { AuthNoGuard } from "@/contexts/auth/auth-no-guard";
import { OverlayLoading } from "@/components/loading";

import { RegisterPage, LoginPage, ForgotPasswordPage } from "./lazy-pages";
import { paths } from "./paths";

export const authRoutes = [
  {
    element: (
      <AuthNoGuard>
        <AuthLayout>
          <Suspense fallback={<OverlayLoading />}>
            <Outlet />
          </Suspense>
        </AuthLayout>
      </AuthNoGuard>
    ),
    children: [
      {
        path: paths.AUTH.LOGIN,
        element: <LoginPage />
      },
      {
        path: paths.AUTH.REGISTER,
        element: <RegisterPage />
      },
      {
        path: paths.AUTH.FORGOT_PASSWORD,
        element: <ForgotPasswordPage />
      }
    ]
  }
];
