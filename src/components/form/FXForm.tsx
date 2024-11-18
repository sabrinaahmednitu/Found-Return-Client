
'use client';
import { ReactNode } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

interface formConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

interface IProps extends formConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}

export default function FXForm({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: IProps) {
  const formConfig: formConfig = {};
  if (!!defaultValues) {
    formConfig['defaultValues'] = defaultValues;
  }

  if (!!resolver) {
    formConfig['resolver'] = resolver;
  }
  // methods = {handleSubmit,register,formState}
  const methods = useForm(formConfig);
  const SubmitHandler = methods.handleSubmit;
  return (
    <FormProvider {...methods}>
      <form onSubmit={SubmitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
