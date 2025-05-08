'use client';
import FXDatePicker from '@/src/components/form/FXDatePicker';
import FXInput from '@/src/components/form/FXInput';
import FXSelect from '@/src/components/form/FXSelect';
import dateToISO from '@/src/utils/dateToISO';
import { Button } from '@nextui-org/button';
import { Divider } from '@nextui-org/react';
import { useFieldArray, useForm, FormProvider } from 'react-hook-form';
import { SubmitHandler, FieldValues } from 'react-hook-form';

const cityOptions = [
  {
    key: 'dhaka',
    label: 'Dhaka',
  },
  {
    key: 'khulna',
    label: 'Khulna',
  },
  {
    key: 'chittagong',
    label: 'Chittagong',
  },
];

export default function CreatePost() {
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map((que: { value: string }) => que.value),
      dateFound: dateToISO(data.dateFound),
    };
    console.log(postData);
  };
  const handleFieldAppend = () => {
    append({ name: 'questions' });
  };
  return (
    <div>
      <div className="h-full rounded-xl bg-gradient-to-b from-default-100 px-[73px] py-12">
        <h1 className="text-2xl font-semibold">Post a found item</h1>
        <Divider className="mb-5 mt-3" />
        {/* making form context using FormProvider */}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput name="title" label="Title"></FXInput>
              </div>
              <div className="min-w-fit flex-1">
                <FXDatePicker label="Found date" name="dateFound" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput name="location" label="Location"></FXInput>
              </div>
              <div className="min-w-fit flex-1">
                <FXSelect label="City" name="city" options={cityOptions} />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput name="location" label="Location"></FXInput>
              </div>
              <div className="min-w-fit flex-1">
                <FXSelect label="City" name="city" options={cityOptions} />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput name="category" label="Category"></FXInput>
              </div>
              <div className="min-w-fit flex-1">
                <FXInput label="Upload Image" name="upload-image" />
              </div>
            </div>

            <Divider className="my-5" />
            <div className="flex justify-between items-center">
              <h1 className="text-xl">Owner verifications questions</h1>
              <Button onClick={() => handleFieldAppend()}>Append</Button>
            </div>
            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center">
                <FXInput
                  name={`questions.${index}.value`}
                  label="Question"
                ></FXInput>
                <Button onClick={() => remove(index)}>Remove</Button>
              </div>
            ))}
            <Divider className="my-5" />
            <Button type="submit" className="mt-3">
              Post
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
