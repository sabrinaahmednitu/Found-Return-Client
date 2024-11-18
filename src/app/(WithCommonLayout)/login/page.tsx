'use client'
import FXForm from '@/src/components/form/FXForm';
import FXInput from '@/src/components/form/FXInput';
import { Button } from '@nextui-org/button';
import Link from 'next/link';

export default function LoginPage() {

  const onSubmit = (data:any) => {
    console.log(data);
  };
  return (
    <div>
      <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
        <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
        <p className="mb-4">Welcome Back ! Let's Started</p>
        <div className="w-[35%]">
          {/* <form onSubmit={onSubmit}> */}
          <FXForm onSubmit={onSubmit}>
            <div className="py-3">
              <FXInput name="email" label="Email" type="email" />
            </div>
            <div className="py-3">
              <FXInput name="password" label="Password" type="password" />
            </div>
            <Button
              className="my-3 w-full rounded-md bg-default-900 font-semibold text-default-200"
              size="lg"
              type="submit"
            >
              Login
            </Button>
          </FXForm>
          {/* </form> */}
          <div className="text-center">
            Don't have account ?<Link href={'/register'}>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
