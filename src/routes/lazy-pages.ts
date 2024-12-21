import { lazy } from "react";

export const HomePage = lazy(() => import("@/pages/home/home"));
export const UsersPage = lazy(() => import("@/pages/home/users"));
export const AccountPage = lazy(() => import("@/pages/home/account"));

export const LoginPage = lazy(() => import("@/pages/auth/login"));
export const RegisterPage = lazy(() => import("@/pages/auth/register"));
export const ForgotPasswordPage = lazy(() => import("@/pages/auth/forgot-password"));
