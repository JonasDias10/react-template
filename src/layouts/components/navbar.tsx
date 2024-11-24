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
        <Box sx={{ color: "text.secondary", mt: 2, px: 2 }}>APP LOGO</Box>

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

      <Box sx={{ m: 1, height: 1, borderRadius: 1 }}>
        <Stack justifyContent="center" alignItems="center" spacing={2}>
          <Box textAlign="center" pt={2}>
            <Typography variant="h6">Este é um projeto gratuito!</Typography>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
}
