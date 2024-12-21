import { useState } from "react";
import { Box, Stack } from "@mui/material";
import { Navbar } from "../components/navbar";
import { Header } from "../components/header";

import { useTheme } from "@/theme/use-theme";

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  const { theme, isDarkMode } = useTheme();

  const [openNavbar, setOpenNavbar] = useState(false);

  const handleOpenNavbar = () => {
    setOpenNavbar(true);
  };

  return (
    <Stack direction="row" gap={10} sx={{ minHeight: "100vh" }}>
      <Navbar openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: { md: "calc(100% - 300px)", xs: "100%" },
          ml: { md: "300px", xs: 0 },
          width: 1,
          bgcolor: isDarkMode ? theme.palette.grey[900] : theme.palette.grey[100]
        }}
      >
        <Header handleOpenNavbar={handleOpenNavbar} />

        <Box sx={{ p: 2, flex: "1 1 auto" }}>{children}</Box>
      </Box>
    </Stack>
  );
}
