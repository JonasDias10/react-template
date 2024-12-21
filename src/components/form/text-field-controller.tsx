import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

type Props<T extends FieldValues> = TextFieldProps & {
  name: Path<T>;
  control: Control<T>;
};

export default function TextFieldController<T extends FieldValues>({ name, control, ...other }: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField {...field} fullWidth error={!!fieldState.error} helperText={fieldState.error?.message} {...other} />
      )}
    />
  );
}
