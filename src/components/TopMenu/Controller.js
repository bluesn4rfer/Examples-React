import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const topMenu = require('./topMenu.json');

export function TopMenu({ setShowThemeSelector }) {
    const theme = useTheme();

    const handleSelect = (eventKey) => {
        console.debug(`TopMenu.js handleSelect() eventKey: ${eventKey}`);
        if (eventKey === 'themeSelector') {
            console.debug("TopMenu.js handleSelect() themeSelector invoked");
            setShowThemeSelector(true);
        }
    };
    
    return (
        <DropdownButton id="topmenu" variant="link" title={<i className='fs-5 icon fa fa-bars' />} onSelect={handleSelect}
          className="rounded"
          style={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText
          }}
        >
          {topMenu.map(item => (
            <Dropdown.Item as={Link} to={item.href} key={item.id} eventKey={item.label === 'Change Theme' ? 'themeSelector' : item.href}
              // style={{
              //   backgroundColor: theme.palette.primary.main
              // }}
            >
              {item.label}
            </Dropdown.Item>
          ))}
        </DropdownButton>
    );
}

export default TopMenu;
