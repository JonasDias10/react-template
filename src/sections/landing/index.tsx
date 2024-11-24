import { Iconify } from "@/components/iconify";
import { paths } from "@/routes/paths";
import { useTheme } from "@/theme/use-theme";
import { alpha, AppBar, Box, Button, Container, Stack, ToggleButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function LandingView() {
  const navigate = useNavigate();

  const { theme, toggleMode, isDarkMode, mode } = useTheme();

  const handleLoginClick = () => {
    navigate(paths.AUTH.LOGIN);
  };

  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <AppBar position="sticky">
        <Toolbar disableGutters>
          <Container sx={{ display: "flex", alignItems: "center", px: 1 }} disableGutters>
            <Typography variant="h6">Logo</Typography>

            <Box sx={{ marginLeft: "auto" }} />

            <Stack direction="row" alignItems="center" spacing={1}>
              <ToggleButton
                color="primary"
                sx={{ color: theme.palette.primary.dark, borderColor: alpha(theme.palette.primary.light, 0.8) }}
                size="small"
                value={mode}
                selected={isDarkMode}
                onClick={toggleMode}
              >
                <Iconify icon="line-md:moon-filled" />
              </ToggleButton>

              <Button variant="outlined" onClick={handleLoginClick}>
                Login
              </Button>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 1,
          height: 1,
          bgcolor: isDarkMode ? theme.palette.grey[900] : theme.palette.grey[100]
        }}
      >
        <Typography variant="h1" align="center">
          Landing Page
        </Typography>
      </Box>
    </Stack>
  );
}
