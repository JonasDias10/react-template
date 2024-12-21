import { Helmet } from "react-helmet-async";
import { ForgotPasswordView } from "@/sections/auth";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Redefinir Senha</title>
      </Helmet>

      <ForgotPasswordView />
    </>
  );
}
