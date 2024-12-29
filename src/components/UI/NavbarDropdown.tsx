'use client';

import { Avatar } from '@nextui-org/react';
import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { logout } from '@/src/services/AuthService';
import { useUser } from '@/src/context/user.provider';
import { protectedRoutes } from '../../../constant';

export default function NavbarDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const { user , setIsLoading: userLoading } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
    console.log('Navigating to:', pathname);
    setIsOpen(false); // Close the dropdown after navigation
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false); // Close the dropdown after logout
    userLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <div className="relative inline-block text-left">
      {/* Trigger */}
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <Avatar src={user?.profilePhoto} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute flex flex-col right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          role="menu"
        >
          <button
            onClick={() => handleNavigation('/profile')}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Profile
          </button>
          <button
            onClick={() => handleNavigation('/profile/create-post')}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Create Post
          </button>
          <button
            onClick={() => handleNavigation('/profile/settings')}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
            role="menuitem"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

// 'use client';

// import { logout } from '@/src/services/AuthService';
// import { Avatar } from '@nextui-org/react';
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
// } from '@nextui-org/react';
// import { useRouter } from 'next/navigation';
// import React from 'react';

// export default function NavbarDropdown() {
//   const router = useRouter();

//   const handleNavigation = (pathname: string) => {
//     router.push(pathname);
//   };

//   return (
//     <Dropdown>
//       <DropdownTrigger>
//         <Avatar className="cursor-pointer" name="Joe" />
//       </DropdownTrigger>
//       <DropdownMenu aria-label="User menu actions" color="primary">
//         <DropdownItem
//           key="profile"
//           onClick={() => handleNavigation('/profile')}
//         >
//           Profile
//         </DropdownItem>
//         <DropdownItem
//           key="create-post"
//           onClick={() => handleNavigation('/profile/create-post')}
//         >
//           Create Post
//         </DropdownItem>
//         <DropdownItem
//           key="settings"
//           onClick={() => handleNavigation('/profile/settings')}
//         >
//           Settings
//         </DropdownItem>

//         <DropdownItem onClick={() => logout()} key="logout" color="danger">
//           Logout
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// }
