import { TextFieldController } from "@/components/form";
import { Iconify } from "@/components/iconify";
import { useAuth } from "@/contexts/auth/use-auth";
import { paths } from "@/routes/paths";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Divider, IconButton, Link, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Nome obrigatório"),
  email: Yup.string().email("Email inválido").required("Email obrigatório"),
  password: Yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha obrigatória"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password")], "As senhas devem ser iguais")
});

export default function RegisterView() {
  const { register } = useAuth();

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues: {
      name: "react-template",
      email: "react-template@gmail.com",
      password: "react-template",
      confirmPassword: "react-template"
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

    register();
  });

  const renderForm = (
    <form onSubmit={onSubmit}>
      <Stack spacing={2} alignItems="flex-end" sx={{ width: 1 }}>
        <TextFieldController name="name" control={control} label="Nome" />

        <TextFieldController name="email" control={control} label="Email" />

        <TextFieldController name="password" control={control} label="Senha" type="password" />

        <TextFieldController name="confirmPassword" control={control} label="Confirmar Senha" type="password" />

        <Button fullWidth type="submit" variant="contained" sx={{ mt: 3, height: 48 }} loading={isSubmitting}>
          Criar Conta
        </Button>
      </Stack>
    </form>
  );

  return (
    <Stack sx={{ py: 5, px: 3 }}>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h4">Criar Conta</Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          Ja possui uma conta?&nbsp;
          <Link component={RouterLink} to={paths.AUTH.LOGIN} fontWeight={500}>
            Fazer Login
          </Link>
        </Typography>
      </Box>

      {renderForm}

      <Divider sx={{ my: 2 }}>
        <Typography component="span" variant="overline">
          Ou
        </Typography>
      </Divider>

      <Box sx={{ textAlign: "center" }}>
        <IconButton>
          <Iconify icon="flat-color-icons:google" width={22} />
        </IconButton>

        <IconButton>
          <Iconify icon="ri:twitter-x-fill" width={22} />
        </IconButton>

        <IconButton>
          <Iconify icon="logos:facebook" width={22} />
        </IconButton>
      </Box>
    </Stack>
  );
}
