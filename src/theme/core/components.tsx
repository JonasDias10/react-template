import { Theme, Components as ComponentsType, useTheme } from "@mui/material/styles";
import { componentsColors } from "./components-colors";

export const Components = (isDarkMode: boolean): ComponentsType<Theme> => {
  const theme = useTheme();

  const colors = componentsColors({ isDarkMode, theme });

  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: colors.MuiBackdrop.root
        },
        invisible: {
          background: colors.MuiBackdrop.invisible
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "8px 16px"
        }
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: colors.MuiButton.containedPrimary.backgroundColor,
            color: colors.MuiButton.containedPrimary.color,
            "&:hover": {
              backgroundColor: colors.MuiButton.containedPrimary.hoverBackgroundColor
            }
          }
        },
        {
          props: { variant: "contained", color: "inherit" },
          style: {
            color: colors.MuiButton.containedInherit
          }
        }
      ]
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: colors.MuiCard.boxShadow,
          borderRadius: 14
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 14,
          boxShadow: colors.MuiDialog.boxShadow
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: "hover"
      }
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontWeight: 700,
          margin: "16px 0"
        },
        h2: {
          fontWeight: 600,
          margin: "14px 0"
        },
        body1: {
          lineHeight: 1.5
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: colors.MuiTooltip.backgroundColor,
          color: colors.MuiTooltip.color,
          borderRadius: theme.shape.borderRadius * 2,
          padding: "6px 10px",
          fontSize: theme.typography.body2.fontSize
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          borderRadius: "50%"
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: colors.MuiCheckbox.checkedColor
          }
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.MuiOutlinedInput.borderColor
          }
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&:before": {
            borderBottomColor: colors.MuiFilledInput.borderBottomColor
          }
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&:before": {
            borderBottomColor: colors.MuiInput.borderBottomColor
          }
        }
      }
    },
    MuiAppBar: {
      variants: [
        {
          props: { color: "primary" },
          style: {
            backgroundColor: colors.MuiAppBar.backgroundColor,
            backdropFilter: colors.MuiAppBar.backdropFilter,
            boxShadow: colors.MuiAppBar.boxShadow,
            color: colors.MuiAppBar.color
          }
        }
      ]
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 30
        },
        indicator: {
          height: 1.2
        }
      }
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          minHeight: 20,
          fontWeight: 500
        }
      }
    }
  };
};
