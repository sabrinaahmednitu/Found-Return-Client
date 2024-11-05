'use client';

import { Avatar } from '@nextui-org/react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';




export default function NavbarDropdown() {
  const router = useRouter();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };


   const [isOpen, setIsOpen] = useState(false);

   const toggleDropdown = () => {
     setIsOpen(!isOpen);
   };

   const closeDropdown = () => {
     setIsOpen(false);
   };

  return (
    <div className="w-full py-6 pb-8">
      <div className="relative inline-block">
        <button
          type="button"
          className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
          onClick={toggleDropdown}
        >
          Dropdown{' '}
          <svg
            class="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Option 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Option 3
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
    // <Dropdown>
    //   <DropdownTrigger>
    //     <Avatar className="cursor-pointer" name="Joe" />
    //   </DropdownTrigger>
    //   <DropdownMenu aria-label="User menu actions" color="primary">
    //     <DropdownItem
    //       key="profile"
    //       onClick={() => handleNavigation('/profile')}
    //     >
    //       Profile
    //     </DropdownItem>
    //     <DropdownItem
    //       key="create-post"
    //       onClick={() => handleNavigation('/profile/create-post')}
    //     >
    //       Create Post
    //     </DropdownItem>
    //     <DropdownItem
    //       key="settings"
    //       onClick={() => handleNavigation('/profile/settings')}
    //     >
    //       Settings
    //     </DropdownItem>
    //     <DropdownItem key="logout" color="danger">
    //       Logout
    //     </DropdownItem>
    //   </DropdownMenu>
    // </Dropdown>
  );
}
