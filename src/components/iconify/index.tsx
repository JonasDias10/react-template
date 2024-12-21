import { Icon } from "@iconify-icon/react";
import { Box, BoxProps } from "@mui/material";

type Props = BoxProps & {
  icon: string;
  width?: number;
};

export function Iconify({ icon, width = 24, sx, ...other }: Props) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...sx
      }}
      {...other}
    >
      <Icon icon={icon} width={width} height={width} />
    </Box>
  );
}
