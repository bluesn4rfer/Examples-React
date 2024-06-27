import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const topMenu = {
    title: 'Menu',
    items: [
        {
            id: 'menus',
            label: 'Menus',
        },
        {
            id: 'views',
            label: 'Views',
        },
        {
            id: 'forms',
            label: 'Forms',
        },
        {
            id: 'icons',
            label: 'Icons',
        },
        {
            id: 'change-theme',
            label: 'Change Theme',
        }
    ]
};

export function TopMenu() {
    return (
        <DropdownButton id="dropdown-basic-button" title={topMenu.title}>
          {topMenu.items.map(item => (
            <Dropdown.Item key={item.id} href={item.href}>
              {item.label}
            </Dropdown.Item>
          ))}
        </DropdownButton>
    );
}

export default TopMenu;