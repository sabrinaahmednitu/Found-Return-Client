import { Spinner } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className=" h-screen fixed inset-0 z-[999] bg-green-500/10  backdrop-blur-md flex justify-center items-center">
      <Spinner size="lg" />
    </div>
  );
}