'use client';
import FXInput from '@/src/components/form/FXInput';
import { Button } from '@nextui-org/button';
import { useFieldArray, useForm, FormProvider } from 'react-hook-form';

export default function page() {
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const {} = useFieldArray({
    control,
    name: 'questions',
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div>
      {/* making form context using FormProvider */}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FXInput name="title" label="Title"></FXInput>
          <Button type="submit" className="mt-3">
            Post
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
