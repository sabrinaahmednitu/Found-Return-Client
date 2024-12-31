import { DatePicker } from '@nextui-org/react';

export default function FXDatePicker({ label ,name }:IProps) {
 
  const { register,
    formState: { errors },
  } = useFormContext();
 
  return (
    <div>
      <h1>datepicker added</h1>
      <DatePicker className="max-w-[284px]" label="Birth date" />;
    </div>
  );
}
