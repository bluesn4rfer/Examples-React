import React, { useState, useRef, useEffect } from 'react';
import { Collapse, Accordion, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const sideMenu = require('./sideMenu.json');

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const theme = useTheme();

	useEffect(() => {
    document.documentElement.style.setProperty('--sidemenu-text-color', theme.palette.primary.contrastText);
    document.documentElement.style.setProperty('--sidemenu-bg-color', theme.palette.primary.main);
    document.documentElement.style.setProperty('--sidemenu-accordion-color', theme.palette.secondary.light);
    document.documentElement.style.setProperty('--sidemenu-border-color', theme.palette.primary.main);
    document.documentElement.style.setProperty('--sidemenu-active-text-color', theme.palette.primary.main);
    document.documentElement.style.setProperty('--sidemenu-active-bg-color', theme.palette.primary.light);
    document.documentElement.style.setProperty('--sidemenu-active-border-color', theme.palette.primary.main);
    document.documentElement.style.setProperty('--sidemenu-hover-text-color', theme.palette.primary.dark);
}, [theme]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);  
  
  const renderSubItems = (subItems) => {
    return (
      <Accordion>
        {subItems.map((subItem, subIdx) => (
          <Accordion.Item eventKey={subIdx.toString()} key={subIdx}>
            <Accordion.Header>{subItem.title}</Accordion.Header>
            <Accordion.Body>
              {subItem.href ? (
                <ListGroup.Item
                  action
                  as={Link}
                  to={subItem.href}
                  onClick={handleLinkClick}
                  style={{
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                  }}
                >
                  {subItem.text}
                </ListGroup.Item>
              ) : (
                subItem.items && renderSubItems(subItem.items)
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  };

  return (
    <div ref={menuRef} className="sidebar border-2 h-100 p-0 text-decoration-none">
      <button onClick={toggleSidebar}
        className="menu-button rounded-end h-100 fs-3 text-start text-uppercase vtext" 
        style={{
          backgroundColor: theme.palette.primary.main,
          borderTop: `2px solid ${theme.palette.primary.main}`,
          borderBottom: `2px solid ${theme.palette.primary.main}`,
          borderLeft: `0px solid ${theme.palette.primary.main}`,
          borderRight: `2px solid ${theme.palette.primary.main}`,
          color: theme.palette.primary.contrastText
        }}
      ><i class="py-2 icon fa fa-cogs" style={{"transform": "rotate(90deg)"}} />EXAMPLES</button>
      <Collapse in={isOpen} className="float-start horizontal-collapsible-content overflow-hidden" style={{"width": "250px"}}>
        <Accordion defaultActiveKey="0" className="list-unstyled">
          {sideMenu.map((menu, index) => (
            <Card key={index}>
              <Accordion.Item eventKey={index.toString()}>
              <Accordion.Header>
                {menu.title}
              </Accordion.Header>
              <Accordion.Body className="p-0">
                <Card.Body className="p-0 text-nowrap">
                  <ListGroup variant="flush">
                    {menu.items && renderSubItems(menu.items)}
                  </ListGroup>
                </Card.Body>
              </Accordion.Body>
              </Accordion.Item>
            </Card>
          ))}
        </Accordion>
      </Collapse>
    </div>
  );
}

export default SideMenu;
