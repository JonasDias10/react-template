import { Helmet } from "react-helmet-async";
import { LoginView } from "@/sections/auth";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Fazer Login</title>
      </Helmet>

      <LoginView />
    </>
  );
}
