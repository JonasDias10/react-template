import { Helmet } from "react-helmet-async";
import { HomeView } from "@/sections/home";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <HomeView />
    </>
  );
}
