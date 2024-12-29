import { DatePicker } from '@nextui-org/react';

export default function FXDatePicker({ label }: { label: string }) {
  return (
    <div>
      <h1>datepicker</h1>
      <DatePicker className="max-w-[284px]" label="Birth date" />;
    </div>
  );
}
