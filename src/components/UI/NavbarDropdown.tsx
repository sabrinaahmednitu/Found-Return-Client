

// import { Avatar } from '@nextui-org/avatar';
// import {
//   Dropdown,
//   DropdownItem,
//   DropdownMenu,
//   DropdownTrigger,
// } from '@nextui-org/dropdown';
// import { useRouter } from 'next/navigation';


// export default function NavbarDropdown() {
//   const router = useRouter();

//   const handleNavigation = (pathname: string) => {
//     router.push(pathname);
//   };

//   return (
//     <Dropdown>
//       <DropdownTrigger>
//         <Avatar className="cursor-pointer" name="joe" />
//       </DropdownTrigger>
//       <DropdownMenu aria-label="Static Actions">
//         <DropdownItem onClick={() => handleNavigation('/profile')}>
//           profile
//         </DropdownItem>
//         <DropdownItem onClick={() => handleNavigation('/profile/create-post')}>
//           Create Post
//         </DropdownItem>
//         <DropdownItem onClick={() => handleNavigation('/profile/settings')}>
//           settings
//         </DropdownItem>
//         <DropdownItem className="text-danger" color="danger">
//           Logout
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// }
