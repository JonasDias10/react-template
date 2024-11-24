import { alpha, Theme } from "@mui/material";

type Props = {
  isDarkMode: boolean;
  theme: Theme;
};

export const componentsColors = ({ isDarkMode, theme }: Props) => ({
  MuiBackdrop: {
    root: alpha(theme.palette.grey[900], 0.8),
    invisible: "transparent"
  },
  MuiButton: {
    containedPrimary: {
      backgroundColor: isDarkMode ? theme.palette.grey[200] : theme.palette.grey[900],
      color: isDarkMode ? theme.palette.grey[900] : theme.palette.common.white,
      hoverBackgroundColor: isDarkMode ? theme.palette.grey[500] : theme.palette.grey[800]
    },
    containedInherit: theme.palette.grey[900]
  },
  MuiCard: {
    boxShadow: `0 2px 4px 0 ${isDarkMode ? alpha(theme.palette.grey[900], 0.2) : alpha(theme.palette.grey[200], 0.2)}`
  },
  MuiDialog: {
    boxShadow: `0 20px 40px -4px ${isDarkMode ? alpha(theme.palette.grey[900], 0.2) : alpha(theme.palette.grey[600], 0.2)}`
  },
  MuiTooltip: {
    backgroundColor: isDarkMode ? theme.palette.grey[200] : theme.palette.grey[900],
    color: isDarkMode ? theme.palette.grey[900] : theme.palette.common.white
  },
  MuiCheckbox: {
    checkedColor: theme.palette.success.light
  },
  MuiOutlinedInput: {
    borderColor: isDarkMode ? alpha(theme.palette.grey[500], 0.8) : alpha(theme.palette.grey[600], 0.8)
  },
  MuiFilledInput: {
    borderBottomColor: isDarkMode ? alpha(theme.palette.grey[500], 0.8) : alpha(theme.palette.grey[600], 0.8)
  },
  MuiInput: {
    borderBottomColor: isDarkMode ? alpha(theme.palette.grey[500], 0.8) : alpha(theme.palette.grey[600], 0.8)
  },
  MuiAppBar: {
    backgroundColor: isDarkMode ? alpha(theme.palette.grey[900], 0.6) : alpha(theme.palette.grey[100], 0.6),
    boxShadow: "none",
    backdropFilter: "blur(20px)",
    color: isDarkMode ? theme.palette.grey[200] : theme.palette.grey[900]
  }
});
