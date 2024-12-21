import { Box, SxProps, Theme } from "@mui/material";
import { forwardRef } from "react";
import { Props as SimpleBarProps } from "simplebar-react";
import SimpleBar from "simplebar-react";

type Props = SimpleBarProps & {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
  trackMarginRight?: number;
};

const Scrollbar = forwardRef<HTMLDivElement, Props>(({ children, trackMarginRight = 2, sx, ...other }, ref) => (
  <Box
    component={SimpleBar}
    scrollableNodeProps={{ ref }}
    clickOnTrack={false}
    sx={{
      "& .simplebar-track": { opacity: 0.4, marginRight: trackMarginRight },
      ...sx
    }}
    {...other}
  >
    {children}
  </Box>
));

Scrollbar.displayName = "Scrollbar";

export { Scrollbar };
