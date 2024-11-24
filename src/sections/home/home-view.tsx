import { Box, Card, Stack, Typography } from "@mui/material";

export default function HomeView() {
  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h4">Início</Typography>
      </Box>

      <Card sx={{ width: 1, p: 2 }}>Tela de Início</Card>
    </Stack>
  );
}
