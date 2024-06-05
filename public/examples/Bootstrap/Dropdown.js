/*
import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
*/

const dropdownMenuData = {
  title: "Dropdown Menu",
  items: [
    { id: 1, label: "Action 1", href: "#/action-1" },
    { id: 2, label: "Action 2", href: "#/action-2" },
    { id: 3, label: "Action 3", href: "#/action-3" }
  ]
};

function App() {
  return (
    <DropdownButton id="dropdown-basic-button" title={dropdownMenuData.title}>
      {dropdownMenuData.items.map(item => (
        <Dropdown.Item key={item.id} href={item.href}>
          {item.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

