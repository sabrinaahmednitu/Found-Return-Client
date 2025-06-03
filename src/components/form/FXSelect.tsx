'use client';

import { IInput } from '@/src/types';
import { Select, SelectItem } from '@nextui-org/select';
import { useFormContext } from 'react-hook-form';

interface IProps extends IInput {
  options: {
    key: string;
    label: string;
  }[];
}

export default function FXSelect({ options,
  name,
  label,
  variant = "bordered",
  disabled
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  
  return (
    <Select
      {...register(name)}
      className="min-w-full sm:min-w-[225px]"
      label={label}
      variant={variant}
      disabled={disabled}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
}
