import { Button } from '@nextui-org/button';
import Link from 'next/link';
import SidebarOptions from './SidebarOptions';
import { userLinks } from './constants';

export default function Sidebar() {
  return (
    <div>
      <div className="rounded-xl bg-default-100 p-2">
        <div className="h-[330px] w-full rounded-md">
          <h1>pp</h1>
        </div>
        <div className="my-3">
          <h1>name</h1>
          <p className="break-words text-sm">email</p>
        </div>
        <Button
          as={Link}
          className="mt-2 w-full rounded-md"
          href={'/profile/create-post'}
        >Create a Post</Button>
      </div>
      <div className="mt-3 space-y-2 rounded-xl bg-default-100 p-2">
        <SidebarOptions links={userLinks} />
      </div>
    </div>
  );
}
