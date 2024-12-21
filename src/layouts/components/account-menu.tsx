import { Iconify } from "@/components/iconify";
import { Box, Button, Divider, ListItemIcon, MenuItem, MenuList, Popover, Typography, useTheme } from "@mui/material";
import { useAuth } from "@/contexts/auth/use-auth";
import { paths } from "@/routes/paths";
import { Link as RouterLink } from "react-router-dom";

type ManuItemType = {
  label: string;
  icon: string;
  path: string;
};

const menuItems: ManuItemType[] = [
  {
    label: "Minha Conta",
    icon: "ri:account-box-fill",
    path: paths.USER.ACCOUNT
  }
];

type Props = {
  onCloseAccountMenu: () => void;
  anchorEl: HTMLElement | null;
};

export function AccountMenu({ onCloseAccountMenu, anchorEl }: Props) {
  const theme = useTheme();

  const { logout } = useAuth();

  return (
    <Popover
      disableScrollLock
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onCloseAccountMenu}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{ maxWidth: 220 }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Entrou como
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
          zdias1413@gmail.com
        </Typography>
      </Box>

      <Divider />

      <MenuList>
        {menuItems.map(({ label, icon, path }) => (
          <MenuItem key={label} component={RouterLink} to={path} onClick={onCloseAccountMenu}>
            <ListItemIcon>
              <Iconify icon={icon} width={24} height={24} />
            </ListItemIcon>
            <Typography variant="body2">{label}</Typography>
          </MenuItem>
        ))}
      </MenuList>

      <Divider />

      <Box sx={{ p: 1 }}>
        <Button fullWidth variant="text" color="error" onClick={logout}>
          Sair
        </Button>
      </Box>
    </Popover>
  );
}
