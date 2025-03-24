import { Iconify } from "@/components/iconify";
import { clearLastPathnameVisited } from "@/contexts/auth/pathname-visited";
import { paths } from "@/routes/paths";
import { alpha, Button, Stack, Typography, useTheme } from "@mui/material";
import { useEffect } from "react";

export function NotFoundView() {
  const theme = useTheme();

  useEffect(() => {
    clearLastPathnameVisited();
  }, []);

  return (
    <Stack
      sx={{
        bgcolor: alpha(theme.palette.error.light, 0.5),
        height: "100vh",
        justifyContent: "center",
        alignItems: "center"
      }}
      spacing={2}
    >
      <Stack justifyContent="center" alignItems="center" spacing={1}>
        <Iconify icon="ooui:article-not-found-ltr" width={100} />
        <Typography variant="h3">404 - Página não encontrada!</Typography>
      </Stack>

      <Button variant="contained" href={paths.LANDING} sx={{ height: 48 }}>
        Ir para a página Inicial
      </Button>
    </Stack>
  );
}
