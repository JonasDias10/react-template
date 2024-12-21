import { darkScrollbar, PaletteMode } from "@mui/material";

type Props = {
  mode: PaletteMode;
};

const commonScrollbarStyle = {
  ...darkScrollbar(),
  "&::-webkit-scrollbar": {
    width: 10,
    height: 10
  }
};

export const customScrollbarStyle = ({ mode }: Props) => {
  if (mode === "dark") {
    return commonScrollbarStyle;
  }

  return {
    ...commonScrollbarStyle,
    "& *::-webkit-scrollbar-track": {
      background: "#F2F2F2"
    },
    "& *::-webkit-scrollbar-thumb": {
      background: "#00000060",
      border: "2px solid #F2F2F2"
    }
  };
};
