import { Button } from '@nextui-org/button';
import Link from 'next/link';
import Image from 'next/image';

import logo2 from '../../../../assets/logo2.png';

import Container from '@/src/components/UI/Container';

import CardSkeleton from '@/src/components/UI/CardSkeleton';

export default function loading() {
  return (
    <Container>
      <div className="section-title my-8">
        <Image
          alt="photo"
          className="w-[100px] h-[100px] mx-auto rounded-full mb-2"
          src={logo2}
        />
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recntly found and reported.
        </p>
        <h1>Recent Posted thing that could be yours</h1>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-3">
        {[...Array(9)].map(() => (
          <CardSkeleton></CardSkeleton>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default">
          <Link href="/found-items"> See All </Link>
        </Button>
      </div>
    </Container>
  );
}