export const getLastPathnameVisited = () => {
  if (!sessionStorage) return null;

  const lastPathname = sessionStorage.getItem("redirect");

  return lastPathname;
};

export const setLastPathnameVisited = (pathname: string) => {
  if (!sessionStorage) return null;

  sessionStorage.setItem("redirect", pathname);
};

export const clearLastPathnameVisited = () => {
  if (!sessionStorage) return null;

  sessionStorage.removeItem("redirect");
};
