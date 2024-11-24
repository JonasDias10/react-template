import { Order } from "@/types/order";
import { User } from "@/types/user";
import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";

const headCells = [
  { id: "name", label: "Name", alignRight: false, width: 180 },
  { id: "email", label: "Email", alignRight: false, width: 280 },
  { id: "role", label: "Cargo", alignRight: false, width: 120 },
  { id: "status", label: "Status", alignRight: false, width: 120 },
  { id: "createdAt", label: "Data de Criação", alignRight: false, width: 180 }
];

type Props = {
  order: Order;
  orderBy: string;
  onSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSort: (property: keyof User) => void;
  selectedLength: number;
  itemsLength: number;
};

export function UserTableHead({ order, orderBy, selectedLength, itemsLength, onSelectAll, onSort }: Props) {
  const indeterminate = selectedLength > 0 && selectedLength < itemsLength;
  const checked = itemsLength > 0 && selectedLength === itemsLength;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox color="primary" indeterminate={indeterminate} checked={checked} onChange={onSelectAll} />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignRight ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ minWidth: headCell.width }}
          >
            <TableSortLabel
              hideSortIcon
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={() => onSort(headCell.id as keyof User)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
