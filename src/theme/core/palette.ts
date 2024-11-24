import { alpha } from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";

export const colors = {
  primary: {
    light: "#A16CDB",
    main: "#983CBD",
    dark: "#7A28A2",
    contrastText: "#FFFFFF"
  },
  secondary: {
    light: "#5B92E1",
    main: "#1877F2",
    dark: "#0E5BC5",
    contrastText: "#FFFFFF"
  },
  info: {
    light: "#B3A2D6",
    main: "#8159D9",
    dark: "#5E40A7",
    contrastText: "#FFFFFF"
  },
  success: {
    main: "#4CAF50",
    contrastText: "#FFFFFF"
  },
  warning: {
    main: "#FFC107",
    contrastText: "#000000"
  },
  error: {
    main: "#DC3545",
    contrastText: "#FFFFFF"
  },
  grey: {
    50: "#FBFAFB",
    100: "#F6F5F7",
    200: "#E2E0E5",
    300: "#C0BDC7",
    400: "#A29EAA",
    500: "#817E89",
    600: "#6B6872",
    700: "#4C4852",
    800: "#37343C",
    900: "#262328"
  },
  common: {
    black: "#000000",
    white: "#FFFFFF"
  }
};

const common = {
  action: {
    hoverOpacity: 0.1,
    selectedOpacity: 0.16,
    activatedOpacity: 0.24,
    disabledOpacity: 0.3,
    focusOpacity: 0.12
  }
};

const darkPalette = createPalette({
  ...colors,
  background: {
    default: "#121212",
    paper: "#1E1E1E"
  },
  text: {
    primary: colors.grey[50],
    secondary: colors.grey[400],
    disabled: colors.grey[500]
  },
  divider: alpha(colors.grey[400], 0.3),
  action: {
    ...common.action,
    active: alpha(colors.common.white, 0.7),
    hover: alpha(colors.common.white, 0.08),
    selected: alpha(colors.common.white, 0.16),
    disabled: alpha(colors.grey[500], 0.3),
    disabledBackground: alpha(colors.grey[500], 0.12),
    focus: alpha(colors.common.white, 0.12)
  }
});

const lightPalette = createPalette({
  ...colors,
  background: {
    default: "#FAFAFA",
    paper: colors.common.white
  },
  text: {
    primary: colors.grey[900],
    secondary: colors.grey[600],
    disabled: colors.grey[500]
  },
  divider: alpha(colors.grey[600], 0.3),
  action: {
    ...common.action,
    active: alpha(colors.grey[800], 0.54),
    hover: alpha(colors.grey[800], 0.04),
    selected: alpha(colors.grey[800], 0.08),
    disabled: alpha(colors.grey[500], 0.3),
    disabledBackground: alpha(colors.grey[500], 0.12),
    focus: alpha(colors.grey[800], 0.12)
  }
});

export const palette = (isDarkMode: boolean) => (isDarkMode ? darkPalette : lightPalette);
