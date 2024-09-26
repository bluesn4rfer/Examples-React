import React, { useState, useRef, useEffect } from 'react';
import { Collapse, Accordion, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const sideMenu = require('./sideMenu.json');

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const theme = useTheme();

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
  
  const renderSubItems = (subItems, parentIndex) => {
    return (
      <ListGroup variant="flush">
        {subItems.map((subItem, subIdx) => (
          subItem.href ? (
            <ListGroup.Item
              action
              as={Link}
              to={subItem.href}
              onClick={handleLinkClick}
              key={subIdx}
              style={{
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
              }}
            >
              {subItem.text}
            </ListGroup.Item>
          ) : (
            subItem.items && (
              <Accordion key={subIdx}>
                <Accordion.Item eventKey={`${parentIndex}-${subIdx}`}>
                  <Accordion.Header>{subItem.title}</Accordion.Header>
                  <Accordion.Body>
                    {renderSubItems(subItem.items, `${parentIndex}-${subIdx}`)}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )
          )
        ))}
      </ListGroup>
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
      <Collapse in={isOpen} className="float-start horizontal-collapsible-content overflow-y-auto" style={{"width": "250px"}}>
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
