import { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>this is user layout</h1>
      {children}
    </>
  );
}
