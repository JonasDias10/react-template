import { SelectController, TextFieldController } from "@/components/form";
import { Role, Status, User } from "@/types/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, DialogActions, MenuItem, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

type Props = {
  user: User | undefined;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  onCloseForm: () => void;
};

const UserSchema = Yup.object().shape({
  name: Yup.string().required("Nome obrigatório"),
  email: Yup.string().email("Email inválido").required("Email obrigatório"),
  role: Yup.mixed().required("Cargo obrigatório"),
  status: Yup.mixed().required("Status obrigatório")
});

export function UserForm({ user, onCloseForm, setUsers }: Props) {
  const methods = useForm({
    resolver: yupResolver(UserSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      role: user?.role || "Regular",
      status: user?.status || "Active"
    },
    mode: "onChange"
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    const { name, email, role, status } = data;

    if (user) {
      const updatedUser: User = {
        ...user,
        name,
        email,
        role: role as Role,
        status: status as Status
      };

      setUsers((prevState) => prevState.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    } else {
      const newUser: User = {
        id: String(Date.now()),
        name,
        email,
        role: role as Role,
        status: status as Status,
        createdAt: new Date()
      };

      setUsers((prevState) => [...prevState, newUser]);
    }

    onCloseForm();
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={2} alignItems="flex-end" sx={{ width: 1, py: 2 }}>
        <TextFieldController name="name" control={control} label="Nome" />

        <TextFieldController name="email" control={control} label="Email" />

        <Box sx={{ display: "flex", gap: 2, width: 1 }}>
          <SelectController name="role" control={control} label="Cargo">
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Regular">Regular</MenuItem>
          </SelectController>

          <SelectController name="status" control={control} label="Status">
            <MenuItem value="Active">Ativo</MenuItem>
            <MenuItem value="Inactive">Inativo</MenuItem>
          </SelectController>
        </Box>
      </Stack>

      <DialogActions>
        <Button onClick={onCloseForm} variant="outlined" color="error" sx={{ minWidth: 120, height: 44 }}>
          Cancelar
        </Button>

        <Button type="submit" variant="contained" loading={isSubmitting} sx={{ minWidth: 120, height: 44 }}>
          Salvar
        </Button>
      </DialogActions>
    </form>
  );
}
