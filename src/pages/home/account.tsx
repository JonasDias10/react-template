import { Helmet } from "react-helmet-async";
import { AccountView } from "@/sections/account";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Minha Conta</title>
      </Helmet>

      <AccountView />
    </>
  );
}
