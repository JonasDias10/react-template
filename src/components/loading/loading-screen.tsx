import { Box, LinearProgress } from "@mui/material";

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 1,
        height: 1
      }}
    >
      <LinearProgress sx={{ maxWidth: 300, width: 1 }} />
    </Box>
  );
}
