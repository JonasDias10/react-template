import { Card, Stack } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <Stack
      sx={{
        height: "100vh",
        backgroundImage: "url(/assets/images/background/auth.jpg)",
        backgroundPosition: "center center",
        justifyContent: "center",
        alignItems: "center",
        padding: 2
      }}
    >
      <Card sx={{ bgcolor: "background.paper", maxWidth: 440, width: 1 }}>{children}</Card>
    </Stack>
  );
}
