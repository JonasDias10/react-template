import { Box, IconButton, Stack, TextField, Toolbar, Tooltip } from "@mui/material";
import { Iconify } from "@/components/iconify";

type Props = {
  search: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDeleteUser: () => void;
  handleEditUser: () => void;
  disableActions: boolean;
};

export function UserToolbar({ search, handleSearch, handleDeleteUser, handleEditUser, disableActions }: Props) {
  return (
    <Toolbar disableGutters>
      <TextField
        placeholder="Buscar usuário"
        size="medium"
        value={search}
        onChange={handleSearch}
        sx={{ maxWidth: 360, width: 1 }}
        slotProps={{
          input: {
            startAdornment: <Iconify icon="eva:search-fill" sx={{ mr: 1, color: "text.disabled" }} />
          }
        }}
      />

      <Stack sx={{ ml: "auto" }} />

      <Stack direction="row">
        <Tooltip title="Excluir Usuário" placement="top">
          <Box>
            <IconButton disabled={disableActions} onClick={handleDeleteUser}>
              <Iconify icon="fluent:delete-20-filled" />
            </IconButton>
          </Box>
        </Tooltip>

        <Tooltip title="Editar Usuário" placement="top">
          <Box>
            <IconButton disabled={disableActions} onClick={handleEditUser}>
              <Iconify icon="cuida:edit-outline" />
            </IconButton>
          </Box>
        </Tooltip>
      </Stack>
    </Toolbar>
  );
}
