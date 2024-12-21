import { useState } from "react";

import { Box, Card, Stack, Tab, Tabs, Typography } from "@mui/material";

import { Iconify } from "@/components/iconify";

import { Account } from "./account";
import { AccountSecurity } from "./account-security";

const tabs = [
  { label: "Minha Conta", value: 0, icon: "eva:person-fill" },
  { label: "Segurança", value: 1, icon: "eva:lock-fill" }
];

const tabsComponents: Record<number, JSX.Element> = {
  0: <Account />,
  1: <AccountSecurity />
};

export default function AccountView() {
  const [tab, setTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h4">Minha Conta</Typography>
      </Box>

      <Card sx={{ width: 1, p: 2, display: "flex", flexDirection: "column" }}>
        <Tabs value={tab} onChange={handleTabChange} sx={{ mb: 3 }}>
          {tabs.map((tab) => (
            <Tab
              key={tab.label}
              value={tab.value}
              label={tab.label}
              iconPosition="start"
              icon={<Iconify icon={tab.icon} />}
            />
          ))}
        </Tabs>

        {tabsComponents[tab]}
      </Card>
    </Stack>
  );
}
