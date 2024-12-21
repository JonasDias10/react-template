import { Iconify } from "@/components/iconify";
import { useLocation } from "react-router-dom";
import { alpha, Box, Drawer, List, ListItem, ListItemButton, Stack, Typography, useTheme } from "@mui/material";
import { paths } from "@/routes/paths";
import { Scrollbar } from "@/components/scrollbar";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { Link as RouterLink } from "react-router-dom";

type NavLinkType = {
  path: string;
  label: string;
  icon: string;
};

const navLinks: NavLinkType[] = [
  {
    path: paths.HOME.ROOT,
    label: "Início",
    icon: "mynaui:home-solid"
  },
  {
    path: paths.HOME.USERS,
    label: "Usuários",
    icon: "flowbite:users-solid"
  }
];

type Props = {
  openNavbar: boolean;
  setOpenNavbar: (value: boolean) => void;
};

export function Navbar({ openNavbar, setOpenNavbar }: Props) {
  const isSmallScreen = useBreakpoint({ breakpoint: "md", method: "down" });

  if (isSmallScreen) return <MobileNav openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />;

  return <DesktopNav />;
}

function DesktopNav() {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        position: "fixed",
        top: 0,
        left: 0
      }}
    >
      <NavContent />
    </Box>
  );
}

function MobileNav({ openNavbar, setOpenNavbar }: Props) {
  const handleClose = () => {
    setOpenNavbar(false);
  };

  return (
    <Drawer anchor="left" open={openNavbar} onClose={handleClose}>
      <NavContent />
    </Drawer>
  );
}

function NavContent() {
  const theme = useTheme();

  const { pathname } = useLocation();

  return (
    <Stack sx={{ height: "100vh", justifyContent: "space-between", maxWidth: 300, width: 1 }}>
      <Box>
        <Stack direction="row" alignItems="center" gap={1} sx={{ px: 2, py: 3 }}>
          <Iconify icon="mingcute:react-line" width={30} sx={{ color: theme.palette.primary.main }} />

          <Typography variant="subtitle1">React Template</Typography>
        </Stack>

        <Scrollbar sx={{ mt: 4, maxHeight: 240 }}>
          <List disablePadding>
            {navLinks.map(({ icon, label, path }) => {
              const isActive = pathname === path;

              return (
                <ListItem key={path}>
                  <ListItemButton
                    disableGutters
                    component={RouterLink}
                    to={path}
                    sx={{
                      borderRadius: 0.8,
                      paddingY: 0.8,
                      paddingX: 2,
                      ...(isActive && {
                        bgcolor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        "&:hover": {
                          bgcolor: alpha(theme.palette.primary.main, 0.4)
                        }
                      })
                    }}
                  >
                    <Box component="span" sx={{ mr: 2 }}>
                      <Iconify icon={icon} width={26} />
                    </Box>
                    <Box component="span">{label}</Box>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Scrollbar>
      </Box>

      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="center" alignItems="center" gap={1}>
          <Box sx={{ bgcolor: theme.palette.success.light, px: 1, py: 0.4, borderRadius: 0.6 }}>Free</Box>

          <Typography variant="body2" component="span">
            Este é um projeto gratuito!
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}
