import { Box, Card, Stack, Typography } from "@mui/material";

export default function AccountView() {
  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h4">Minha Conta</Typography>
      </Box>

      <Card sx={{ width: 1, p: 2 }}>Conta</Card>
    </Stack>
  );
}
