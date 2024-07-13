import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const topMenu = require('./TopMenu.json');

export function TopMenu() {
    return (
        <DropdownButton id="topmenu" variant="secondary" title={<i className='fs-5 icon fa fa-bars' />}>
          {topMenu.map(item => (
            <Dropdown.Item as={Link} to={item.href} key={item.id}>
              {item.label}
            </Dropdown.Item>
          ))}
        </DropdownButton>
    );
}

export default TopMenu;
