'use client';

import { Avatar } from '@nextui-org/avatar';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function NavbarDropdown() {
  const router = useRouter();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" name="joe" />
      </DropdownTrigger>
      <DropdownMenu >
        <DropdownItem key="0" onClick={() => handleNavigation('/profile')}>
          profile
        </DropdownItem>
        <DropdownItem
          key="1"
          onClick={() => handleNavigation('/profile/create-post')}
        >
          Create Post
        </DropdownItem>
        <DropdownItem
          key="2"
          onClick={() => handleNavigation('/profile/settings')}
        >
          settings
        </DropdownItem>
        <DropdownItem key="3" className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
