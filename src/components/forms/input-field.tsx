import { type Path, type FieldValues } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { type ComponentProps, type ReactNode } from 'react';

type InputFieldProps<T = FieldValues> = {
  name: Path<T>;
  label?: ReactNode;
} & ComponentProps<'input'>;

export function InputField<T = FieldValues>({
  name,
  label,
  ...inputProps
}: InputFieldProps<T>) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input {...field} {...inputProps} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
