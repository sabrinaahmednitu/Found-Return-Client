'use client'

import React, { useState } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import { Avatar } from '@nextui-org/react';

export default function TestDropdown() {
     const [isOpen, setIsOpen] = useState(true);
    return (
     
      <Dropdown isOpen={isOpen} onOpenChange={setIsOpen}>
        <DropdownTrigger>
          <div
            onClick={() => console.log('Dropdown triggered')}
            className="cursor-pointer"
          >
            <Avatar className="cursor-pointer" name="Joe" />
          </div>
        </DropdownTrigger>
        <DropdownMenu
          color="primary"
          style={{ position: 'relative', zIndex: 9999 }}
        >
          <DropdownItem key="1">Option 1</DropdownItem>
          <DropdownItem key="2">Option 2</DropdownItem>
          <DropdownItem key="3">Option 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    
    );
}
