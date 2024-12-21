import { Box, LinearProgress } from "@mui/material";

export default function OverlayLoading() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <LinearProgress sx={{ maxWidth: 300, width: 1 }} />
    </Box>
  );
}
