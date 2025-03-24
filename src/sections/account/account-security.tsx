import { TextFieldController } from "@/components/form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const AccountSecuritySchema = Yup.object().shape({
  password: Yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha obrigatória"),

  newPassword: Yup.string()
    .notOneOf([Yup.ref("password")], "As senhas devem ser diferentes")
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .required("Senha obrigatória"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "As senhas devem ser iguais")
    .required("Senha obrigatória")
});

export function AccountSecurity() {
  const methods = useForm({
    resolver: yupResolver(AccountSecuritySchema),
    defaultValues: {
      password: "",
      newPassword: "",
      confirmPassword: ""
    },
    mode: "onChange"
  });

  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);
  });

  const renderPasswordForm = (
    <form onSubmit={onSubmit}>
      <Stack spacing={2} alignItems="flex-end" sx={{ width: 1 }}>
        <TextFieldController name="password" control={control} label="Senha" type="password" />

        <TextFieldController name="newPassword" control={control} label="Nova Senha" type="password" />

        <TextFieldController name="confirmPassword" control={control} label="Confirmar Senha" type="password" />

        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3, height: 40, maxWidth: 140 }}
          loading={isSubmitting}
        >
          Alterar Senha
        </Button>
      </Stack>
    </form>
  );

  return <Stack sx={{ py: 2, px: 3 }}>{renderPasswordForm}</Stack>;
}
