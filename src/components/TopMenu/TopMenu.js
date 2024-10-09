import { useEffect, useRef, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mergeMenus from '../../utils/mergeMenus';

const mainMenu = require('../../menu.json');
const menuCustomizations = require('./topMenu.json');

export function TopMenu({ setShowThemeSelector }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [topMenu, setTopMenu] = useState([]);
    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setShowDropdown(false);
          setActiveDropdown(null);
        }
    };
    
    const handleSelect = (eventKey) => {
        console.debug(`TopMenu.js handleSelect() eventKey: ${eventKey}`);
        if (eventKey === 'themeSelector') {
            console.debug("TopMenu.js handleSelect() themeSelector invoked");
            setShowThemeSelector(true);
        }
        setShowDropdown(false); // Close the dropdown after selection        
        setActiveDropdown(null);
    };

    const toggleDropdown = (event) => {
        event.preventDefault();
        event.stopPropagation(); // Prevent event from bubbling up to the document        
        setShowDropdown((prevState) => !prevState);
    };

    const handleMouseEnter = (dropdownId) => {
        setActiveDropdown(dropdownId);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);    

    useEffect(() => {
        setTopMenu(mergeMenus(menuCustomizations, mainMenu));
    }, []);

    return (
        <DropdownButton 
            ref={menuRef}
            id="topmenu" 
            variant="link" 
            title={<i className='fs-5 icon fa fa-bars' />}
            onSelect={handleSelect}
            onClick={toggleDropdown}
            className="topmenu rounded"
            style={{
                backgroundColor: 'var(--theme-secondary-main)',
                color: 'var(--theme-secondary-contrastText)'
            }}
            show={showDropdown}
        >
            {topMenu.map(item => (
                item.items ? (
                    <Dropdown key={item.id} as="div" drop="end"
                        className="topmenu"
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                        show={activeDropdown === item.id}                        
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
