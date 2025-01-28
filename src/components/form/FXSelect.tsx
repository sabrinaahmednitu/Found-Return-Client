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

export default function FXSelect({ options, name, label }: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Select {...register(name)} className="max-w-xs" label={label}>
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
}
