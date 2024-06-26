import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const topMenu = [
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
];

export function TopMenu() {
    return (
        <DropdownButton id="topmenu" variant="secondary" title={<i className='fs-5 icon fa fa-bars' />}>
          {topMenu.map(item => (
            <Dropdown.Item key={item.id} href={item.href}>
              {item.label}
            </Dropdown.Item>
          ))}
        </DropdownButton>
    );
}

export default TopMenu;