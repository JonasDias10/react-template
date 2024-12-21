import { useState } from "react";
import { Iconify } from "@/components/iconify";
import { alpha, AppBar, Avatar, Box, Container, IconButton, ToggleButton, Toolbar } from "@mui/material";
import { AccountMenu } from "./account-menu";

import { useTheme } from "@/theme/use-theme";

type Props = {
  handleOpenNavbar: () => void;
};

export function Header({ handleOpenNavbar }: Props) {
  const { theme, toggleMode, isDarkMode, mode } = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenAccountMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAccountMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <Toolbar disableGutters>
        <Container sx={{ display: "flex", alignItems: "center", px: 1 }} disableGutters>
          <IconButton sx={{ display: { md: "none", xs: "block" } }} onClick={handleOpenNavbar}>
            <Iconify icon="eva:menu-fill" />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

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

          <IconButton
            onClick={handleOpenAccountMenu}
            aria-controls={anchorEl ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={anchorEl ? "true" : undefined}
          >
            <Avatar sx={{ bgcolor: theme.palette.primary.main, width: 36, height: 36 }}>J</Avatar>
          </IconButton>
        </Container>
      </Toolbar>

      <AccountMenu onCloseAccountMenu={handleCloseAccountMenu} anchorEl={anchorEl} />
    </AppBar>
  );
}
