'use client';

import { Avatar } from '@nextui-org/react';
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
        <Avatar className="cursor-pointer" name="Joe" />
      </DropdownTrigger>
      <DropdownMenu aria-label="User menu actions" color="primary">
        <DropdownItem
          key="profile"
          onClick={() => handleNavigation('/profile')}
        >
          Profile
        </DropdownItem>
        <DropdownItem
          key="create-post"
          onClick={() => handleNavigation('/profile/create-post')}
        >
          Create Post
        </DropdownItem>
        <DropdownItem
          key="settings"
          onClick={() => handleNavigation('/profile/settings')}
        >
          Settings
        </DropdownItem>
        <DropdownItem key="logout" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
