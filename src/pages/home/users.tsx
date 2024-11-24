import { Helmet } from "react-helmet-async";
import { UsersView } from "@/sections/users";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Usuários</title>
      </Helmet>

      <UsersView />
    </>
  );
}
