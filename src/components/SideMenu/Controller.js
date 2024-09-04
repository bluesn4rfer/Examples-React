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
  
  return (
    <div ref={menuRef} className="sidebar h-100 p-0 text-decoration-none">
      <button onClick={toggleSidebar}
        className="menu-button rounded-end h-100 fs-3 text-start text-uppercase vtext" 
        style={{
          backgroundColor: theme.palette.primary.main,
          borderTop: `2px solid ${theme.palette.secondary.main}`,
          borderBottom: `2px solid ${theme.palette.secondary.main}`,
          borderLeft: `0px solid ${theme.palette.secondary.main}`,
          borderRight: `2px solid ${theme.palette.secondary.main}`,
          color: theme.palette.primary.contrastText
        }}
      ><i class="py-2 icon fa fa-cogs" style={{"transform": "rotate(90deg)"}} />EXAMPLES</button>
      <Collapse in={isOpen} className="float-start horizontal-collapsible-content overflow-hidden" style={{"width": "250px"}}>
        <Accordion defaultActiveKey="0" className="border-primary list-unstyled">
          {sideMenu.map((menu, index) => (
            <Card key={index}>
              <Accordion.Item eventKey={index.toString()}>
              <Accordion.Header
                style={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText
                }}              
              >
                {menu.title}
              </Accordion.Header>
              <Accordion.Body className="p-0">
                <Card.Body className="p-0 text-nowrap">
                  <ListGroup variant="flush">
                    {menu.items.map((item, idx) => (
                      <ListGroup.Item action as={Link} to={item.href} key={idx} onClick={handleLinkClick}
                        style={{
                          backgroundColor: theme.palette.secondary.main,
                          color: theme.palette.secondary.contrastText
                        }}
                      >
                        {item.text}
                      </ListGroup.Item>
                    ))}
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
