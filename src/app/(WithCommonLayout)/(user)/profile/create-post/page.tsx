'use client';
import FXInput from '@/src/components/form/FXInput';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/react';
import { useFieldArray, useForm, FormProvider } from 'react-hook-form';
import { SubmitHandler, FieldValues } from 'react-hook-form';

export default function page() {
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const {append,remove} = useFieldArray({
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
          <Divider className='my-5' />
          <div className='flex justify-between items-center'>
            <h1 className='text-xl'>Owner verifications question</h1>
          <Button>Append</Button>
          </div>
          <Button type="submit" className="mt-3">
            Post
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
