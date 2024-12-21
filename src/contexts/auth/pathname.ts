export const getLastPathname = () => {
  if (!sessionStorage) return null;

  const lastPathname = sessionStorage.getItem("redirect");

  return lastPathname;
};

export const setLastPathname = (pathname: string) => {
  if (!sessionStorage) return null;

  sessionStorage.setItem("redirect", pathname);
};

export const clearLastPathname = () => {
  if (!sessionStorage) return null;

  sessionStorage.removeItem("redirect");
};
