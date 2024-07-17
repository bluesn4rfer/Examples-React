import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const topMenu = require('./topMenu.json');

export function TopMenu({ setShowThemeSelector }) {
    const handleSelect = (eventKey) => {
        console.debug(`TopMenu.js handleSelect() eventKey: ${eventKey}`);
        if (eventKey === 'themeSelector') {
            console.debug("TopMenu.js handleSelect() themeSelector invoked");
            setShowThemeSelector(true);
        }
    };
    
    return (
        <DropdownButton id="topmenu" variant="secondary" title={<i className='fs-5 icon fa fa-bars' />} onSelect={handleSelect}>
          {topMenu.map(item => (
            <Dropdown.Item as={Link} to={item.href} key={item.id} eventKey={item.label === 'Change Theme' ? 'themeSelector' : item.href}>
              {item.label}
            </Dropdown.Item>
          ))}
        </DropdownButton>
    );
}

export default TopMenu;
