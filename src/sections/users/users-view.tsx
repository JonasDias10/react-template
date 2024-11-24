import React, { useState, useMemo } from "react";
import {
  Box,
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Typography
} from "@mui/material";

import { User } from "@/types/user";
import { Order } from "@/types/order";
import { Scrollbar } from "@/components/scrollbar";
import { Iconify } from "@/components/iconify";
import { sort } from "@/utils/sort";
import { usersData } from "./mock/users";

import { UserForm } from "./user-form";
import { UserToolbar } from "./user-toolbar";
import { UserTableRow } from "./user-table-row";
import { UserTableHead } from "./user-table-head";

export default function UsersView() {
  const [users, setUsers] = useState<User[]>(usersData);
  const [user, setUser] = useState<User | undefined>(undefined);

  const [openForm, setOpenForm] = useState(false);

  const [search, setSearch] = useState("");

  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof User>("name");

  const [selected, setSelected] = useState<string[]>([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const totalSelected = selected.length;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSort = (property: keyof User) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClickRow = (id: string) => {
    const isSelected = selected.includes(id);

    const updatedSelection = isSelected ? selected.filter((selectedId) => selectedId !== id) : [...selected, id];

    setSelected(updatedSelection);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    console.log(event);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isRowSelected = (id: string) => selected.includes(id);

  const filteredUsersAndSorted = useMemo(() => {
    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));

    if (!orderBy) return filteredUsers;

    return sort(filteredUsers, order, orderBy);
  }, [order, orderBy, search, users]);

  const totalUsersAfterFilter = filteredUsersAndSorted.length;

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const newSelected = filteredUsersAndSorted.map((user) => user.id);
    setSelected(checked ? newSelected : []);
  };

  const pagedUsers = filteredUsersAndSorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const disableActions = totalSelected > 1 || totalSelected === 0;

  const handleDeleteUser = () => {
    const [selectedId] = selected;

    setUsers((prev) => prev.filter((user) => user.id !== selectedId));

    setSelected([]);
  };

  const handleEditUser = () => {
    const [selectedId] = selected;

    const user = users.find((user) => user.id === selectedId);

    setUser(user);

    setOpenForm(true);
  };

  const handleAddUser = () => {
    setUser(undefined);
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setUser(undefined);
    setOpenForm(false);
  };

  return (
    <Stack spacing={4}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h4">Usuários</Typography>

        <Button variant="contained" startIcon={<Iconify icon="ant-design:user-add-outlined" />} onClick={handleAddUser}>
          Novo Usuário
        </Button>
      </Box>

      <Card sx={{ width: 1, p: 2 }}>
        <UserToolbar
          search={search}
          handleSearch={handleSearch}
          handleDeleteUser={handleDeleteUser}
          handleEditUser={handleEditUser}
          disableActions={disableActions}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: "unset" }}>
            <Table>
              <UserTableHead
                order={order}
                orderBy={orderBy}
                selectedLength={totalSelected}
                itemsLength={totalUsersAfterFilter}
                onSelectAll={handleSelectAll}
                onSort={handleSort}
              />

              <TableBody>
                {pagedUsers.map((user) => (
                  <UserTableRow
                    key={user.id}
                    user={user}
                    onSelectRow={handleClickRow}
                    isRowSelected={isRowSelected(user.id)}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          component="div"
          rowsPerPageOptions={[5, 10, 25]}
          count={totalUsersAfterFilter}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Linhas por página"
          labelDisplayedRows={({ from, to, count }) => `${from}–${to} de ${count}`}
        />
      </Card>

      <Dialog fullWidth maxWidth="sm" open={openForm} onClose={handleCloseForm}>
        <DialogTitle>{user ? "Editar Usuário" : "Novo Usuário"}</DialogTitle>

        <DialogContent>
          <UserForm user={user} onCloseForm={handleCloseForm} setUsers={setUsers} />
        </DialogContent>
      </Dialog>
    </Stack>
  );
}
