import { Helmet } from "react-helmet-async";
import { RegisterView } from "@/sections/auth";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Criar Conta</title>
      </Helmet>

      <RegisterView />
    </>
  );
}
