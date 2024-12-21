import { Iconify } from "@/components/iconify";
import { paths } from "@/routes/paths";
import { useTheme } from "@/theme/use-theme";
import {
  alpha,
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  ToggleButton,
  Toolbar,
  Typography,
  Grid2 as Grid
} from "@mui/material";
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
            <Stack direction="row" alignItems="center" gap={1} sx={{ px: 2, py: 3 }}>
              <Iconify icon="mingcute:react-line" width={30} sx={{ color: theme.palette.primary.main }} />

              <Typography variant="subtitle1">React Template</Typography>
            </Stack>

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
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          py: 8,
          px: 2,
          bgcolor: isDarkMode ? theme.palette.grey[900] : theme.palette.grey[100]
        }}
      >
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          Bem-vindo ao React Template
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
          Desenvolva sua aplicação com React e Material UI em poucos minutos com o React Template. O template oferece
          uma estrutura completa para construir aplicativos web modernos e escaláveis.
        </Typography>
      </Box>

      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Recursos incríveis
        </Typography>

        <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ maxWidth: 800, mx: "auto", mb: 6 }}>
          Descubra as funcionalidades que tornam o nosso template a escolha ideal para seu projeto.
        </Typography>

        <Grid container spacing={2}>
          {[
            { title: "Material UI", icon: "material-symbols:design-services-rounded" },
            { title: "Escalabilidade", icon: "uil:arrow-growth" },
            { title: "Design Responsivo", icon: "material-symbols:devices" },
            { title: "Grátis", icon: "emojione-monotone:free-button" },
            { title: "Customização", icon: "mdi:theme-light-dark" },
            { title: "Arquitetura", icon: "uil:layer-group" }
          ].map((feature, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 4,
                  bgcolor: isDarkMode ? alpha(theme.palette.grey[800], 0.6) : theme.palette.common.white,
                  borderRadius: 1,
                  boxShadow: 2,
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" }
                }}
              >
                <Iconify icon={feature.icon} width={48} height={48} color={theme.palette.primary.main} />
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                  {feature.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box
        sx={{
          py: 8,
          textAlign: "center",
          bgcolor: isDarkMode ? alpha(theme.palette.primary.dark, 0.9) : theme.palette.primary.light
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="white" gutterBottom>
          Pronto para começar?
        </Typography>

        <Typography variant="body1" color="white" sx={{ mb: 4 }}>
          Experimente o React Template e crie aplicativos incríveis hoje mesmo.
        </Typography>

        <Button
          href="https://github.com/JonasDias10/react-template"
          variant="contained"
          size="large"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<Iconify icon="mingcute:github-fill" />}
        >
          Comece Agora
        </Button>
      </Box>

      <Box
        sx={{
          py: 4,
          textAlign: "center",
          bgcolor: isDarkMode ? theme.palette.grey[900] : theme.palette.grey[200]
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Jonas Dias. Todos os direitos reservados.
        </Typography>
      </Box>
    </Stack>
  );
}
