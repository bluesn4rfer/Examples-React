import { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const topMenu = require('./topMenu.json');

export function TopMenu({ setShowThemeSelector }) {
    const theme = useTheme();
    const [showDropdown, setShowDropdown] = useState(false);

	useEffect(() => {
        document.documentElement.style.setProperty('--topmenu-text-color', theme.palette.secondary.contrastText);
        document.documentElement.style.setProperty('--topmenu-bg-color', theme.palette.secondary.main);
        document.documentElement.style.setProperty('--topmenu-border-color', theme.palette.secondary.main);
        document.documentElement.style.setProperty('--topmenu-active-text-color', theme.palette.secondary.main);
        document.documentElement.style.setProperty('--topmenu-active-bg-color', theme.palette.secondary.light);
        document.documentElement.style.setProperty('--topmenu-active-border-color', theme.palette.secondary.main);
        document.documentElement.style.setProperty('--topmenu-hover-text-color', theme.palette.secondary.dark);
    }, [theme]);

    const handleSelect = (eventKey) => {
        console.debug(`TopMenu.js handleSelect() eventKey: ${eventKey}`);
        if (eventKey === 'themeSelector') {
            console.debug("TopMenu.js handleSelect() themeSelector invoked");
            setShowThemeSelector(true);
        }
    };

    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    return (
        <DropdownButton 
            id="topmenu" 
            variant="link" 
            title={<i className='fs-5 icon fa fa-bars' />}
            onSelect={handleSelect}
            onClick={toggleDropdown}
            className="topmenu rounded"
            style={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText
            }}
            show={showDropdown}
        >
            {topMenu.map(item => (
                item.items ? (
                    <Dropdown key={item.id} as="div" drop="end"
                        className="topmenu"
                    >
                        <Dropdown.Toggle 
                            as={Link} 
                            to={item.href} 
                            eventKey={item.href}                          
                        >
                            {item.label}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {item.items.map(subItem => (
                                <Dropdown.Item as={Link} to={subItem.href} key={subItem.href} eventKey={subItem.href}>
                                    {subItem.label}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                ) : (
                    <Dropdown.Item 
                        as={Link} 
                        to={item.href} 
                        key={item.id} 
                        eventKey={item.label === 'Change Theme' ? 'themeSelector' : item.href}
                    >
                        {item.label}
                    </Dropdown.Item>
                )
            ))}
        </DropdownButton>
    );
}

export default TopMenu;
