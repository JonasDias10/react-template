import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@/contexts/auth/use-auth";
import { paths } from "@/routes/paths";
import { Box, Divider, IconButton, Link, Stack, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Iconify } from "@/components/iconify";
import { TextFieldController } from "@/components/form";
import { Link as RouterLink } from "react-router-dom";
import { useSnackbar } from "notistack";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Email obrigatório"),
  password: Yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("Senha obrigatória")
});

export default function LoginView() {
  const { enqueueSnackbar } = useSnackbar();

  const { login } = useAuth();

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "react-template@gmail.com",
      password: "react-template"
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

    enqueueSnackbar("Bem-vindo ao React Template!", { variant: "success" });

    login();
  });

  const renderForm = (
    <form onSubmit={onSubmit}>
      <Stack spacing={2} alignItems="flex-end" sx={{ width: 1 }}>
        <TextFieldController name="email" control={control} label="Email" />

        <Link component={RouterLink} to={paths.AUTH.FORGOT_PASSWORD} variant="subtitle2" fontWeight={500}>
          Esqueceu sua senha?
        </Link>

        <TextFieldController name="password" control={control} label="Senha" type="password" />

        <LoadingButton fullWidth type="submit" variant="contained" sx={{ mt: 3, height: 48 }} loading={isSubmitting}>
          Entrar
        </LoadingButton>
      </Stack>
    </form>
  );

  return (
    <Stack sx={{ py: 5, px: 3 }}>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h4">Fazer Login</Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          Não possui uma conta?&nbsp;
          <Link component={RouterLink} to={paths.AUTH.REGISTER} fontWeight={500}>
            Criar Conta
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
