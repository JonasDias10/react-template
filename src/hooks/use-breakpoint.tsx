import { useMediaQuery, useTheme } from "@mui/material";

type Props = {
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl";
  method?: "up" | "down";
};

export function useBreakpoint({ breakpoint, method }: Props) {
  const theme = useTheme();

  const isDown = useMediaQuery(theme.breakpoints.down(breakpoint));
  const isUp = useMediaQuery(theme.breakpoints.up(breakpoint));
  const isOnly = useMediaQuery(theme.breakpoints.only(breakpoint));

  if (method === "up") return isUp;
  if (method === "down") return isDown;

  return isOnly;
}
