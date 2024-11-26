'use client';
import FXForm from '@/src/components/form/FXForm';
import FXInput from '@/src/components/form/FXInput';
import { useUserRegistration } from '@/src/hooks/auth.hook';
import registerValidationSchema from '@/src/schemas/register.schema';
import { registerUser } from '@/src/services/AuthService';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useEffect } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
export default function RegisterPage() {
  const { mutate: handleUserRegistration, isPending } = useUserRegistration();
 

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = {
      ...data,
      profilePhoto:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    };
    console.log('inside from user data', userData);
    handleUserRegistration(userData);
  };
  return (
    <div>
      <div>
        <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
          <h3 className="my-2 text-2xl font-bold">Register with FoundX</h3>
          <p className="mb-4">Welcome ! Let's Started</p>
          <div className="w-[35%]">
            <FXForm
              defaultValues={{
                name: 'Nitu',
                email: 'nitumoni@gmail.com',
                mobileNumber: '01767345658',
                password: '123456',
              }}
              onSubmit={onSubmit}
              resolver={zodResolver(registerValidationSchema)}
            >
              <div className="py-3">
                <FXInput name="name" label="Name" type="name" size="sm" />
              </div>
              <div className="py-3">
                <FXInput name="email" label="Email" type="email" />
              </div>
              <div className="py-3">
                <FXInput
                  name="mobileNumber"
                  label="Mobile Number"
                  type="number"
                />
              </div>
              <div className="py-3">
                <FXInput name="password" label="Password" type="password" />
              </div>
              <Button
                className="my-3 w-full rounded-md bg-default-900 font-semibold text-default-200"
                size="lg"
                type="submit"
              >
                Register
              </Button>
            </FXForm>
            <div className="text-center">
              Already have an account ?<Link href={'/login'}>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
