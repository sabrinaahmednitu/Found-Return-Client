'use client';
import FXInput from '@/src/components/form/FXInput';
import { useFieldArray, useForm, FormProvider } from 'react-hook-form';

export default function page() {
  const methods = useForm();
  const { control } = methods;
  const {} = useFieldArray({
    control,
    name: 'questions',
  });
  return (
    <div>
      {/* making form context using FormProvider */}
      <FormProvider {...methods}>
        <FXInput name="title" label="Title"></FXInput>
     </FormProvider>
    </div>
  );
}
