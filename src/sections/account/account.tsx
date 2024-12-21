import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Box, Stack, Typography, Grid2 as Grid, Paper } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { TextFieldController } from "@/components/form";

const AccountSchema = Yup.object().shape({
  name: Yup.string().required("Nome obrigatório"),
  email: Yup.string().email("Email inválido").required("Email obrigatório"),
  city: Yup.string().optional(),
  state: Yup.string().optional(),
  country: Yup.string().optional(),
  phone: Yup.string().optional()
});

export function Account() {
  const methods = useForm({
    resolver: yupResolver(AccountSchema),
    defaultValues: {
      name: "react-template",
      email: "react-template@gmail.com",
      city: "Irecê",
      state: "Bahia",
      country: "Brasil",
      phone: "(00) 00000-0000"
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
      <Grid
        component={Paper}
        variant="outlined"
        container
        spacing={2}
        sx={{ px: 2, py: 4, borderRadius: 2, borderStyle: "dashed" }}
      >
        <Grid size={{ xs: 12, md: 6 }} gap={2}>
          <TextFieldController name="name" control={control} label="Nome" />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} gap={2}>
          <TextFieldController name="email" control={control} label="Email" />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} gap={2}>
          <TextFieldController name="city" control={control} label="Cidade" />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} gap={2}>
          <TextFieldController name="state" control={control} label="Estado" />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} gap={2}>
          <TextFieldController name="country" control={control} label="País" />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }} gap={2}>
          <TextFieldController name="phone" control={control} label="Telefone" />
        </Grid>
      </Grid>

      <Stack>
        <LoadingButton
          fullWidth
          type="submit"
          variant="contained"
          sx={{ mt: 3, height: 44, maxWidth: 120, ml: "auto" }}
          loading={isSubmitting}
        >
          Salvar
        </LoadingButton>
      </Stack>
    </form>
  );

  return (
    <Stack sx={{ py: 2, px: 3 }}>
      <Box
        component={Paper}
        variant="outlined"
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          gap: 2,
          mb: 2,
          borderRadius: 2,
          borderStyle: "dashed"
        }}
      >
        <Avatar sx={{ width: 84, height: 84 }}>J</Avatar>

        <Typography variant="h6" sx={{ mt: 2 }}>
          react-template
        </Typography>
      </Box>

      {renderForm}
    </Stack>
  );
}
