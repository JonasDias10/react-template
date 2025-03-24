import { TextFieldController } from "@/components/form";
import { paths } from "@/routes/paths";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Email obrigatório")
});

export default function LoginView() {
  const methods = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "react-template@gmail.com"
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

  const renderForm = (
    <form onSubmit={onSubmit}>
      <Stack spacing={2} alignItems="flex-end" sx={{ width: 1 }}>
        <TextFieldController name="email" control={control} label="Email" />

        <Button fullWidth type="submit" variant="contained" sx={{ mt: 3, height: 48 }} loading={isSubmitting}>
          Redefinir Senha
        </Button>
      </Stack>
    </form>
  );

  return (
    <Stack sx={{ py: 5, px: 3 }}>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h4">Redefinir Senha</Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          Lembou da sua senha?&nbsp;
          <Link component={RouterLink} to={paths.AUTH.LOGIN} fontWeight={500}>
            Fazer Login
          </Link>
        </Typography>
      </Box>

      {renderForm}
    </Stack>
  );
}
