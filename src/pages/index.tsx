import { Helmet } from "react-helmet-async";
import { LandingView } from "@/sections/landing";

export function LandingPage() {
  return (
    <>
      <Helmet>
        <title>React Template</title>
      </Helmet>

      <LandingView />
    </>
  );
}
