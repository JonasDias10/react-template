import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

type Props<T extends FieldValues> = TextFieldProps & {
  name: Path<T>;
  control: Control<T>;
  children: React.ReactNode;
  helperText?: string;
};

export default function SelectController<T extends FieldValues>({
  name,
  control,
  children,
  helperText,
  ...other
}: Props<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          fullWidth
          error={Boolean(error)}
          helperText={error ? error.message : helperText}
          {...other}
        >
          {children}
        </TextField>
      )}
    />
  );
}
