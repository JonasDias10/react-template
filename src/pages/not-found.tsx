import { Helmet } from "react-helmet-async";
import { NotFoundView } from "@/sections/not-found";

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>

      <NotFoundView />
    </>
  );
}
