import { IInput } from '@/src/types';
import { DatePicker } from '@nextui-org/react';
import { Controller } from 'react-hook-form';

interface IProps extends IInput {}

export default function FXDatePicker({ label, name }: IProps) {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker className="max-w-[284px]" label={label} {...fields} />
      )}
    />
  );
}
