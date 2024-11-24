import { Checkbox, TableCell, TableRow, Chip } from "@mui/material";
import { User } from "@/types/user";

type Props = {
  user: User;
  isRowSelected: boolean;
  onSelectRow: (id: string) => void;
};

export function UserTableRow({ user, isRowSelected, onSelectRow }: Props) {
  const formattedDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleClickRow = () => onSelectRow(user.id);

  const colorByStatus = user.status === "Active" ? "success" : "error";

  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      onClick={handleClickRow}
      aria-checked={isRowSelected}
      selected={isRowSelected}
    >
      <TableCell padding="checkbox">
        <Checkbox checked={isRowSelected} />
      </TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell>
        <Chip label={user.status} color={colorByStatus} />
      </TableCell>
      <TableCell>{formattedDate(user.createdAt)}</TableCell>
    </TableRow>
  );
}
