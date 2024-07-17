import React, { useState } from 'react';
import { Collapse, Accordion, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const sideMenu = require('./sideMenu.json');

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  
  return (
    <div className="sidebar bg-secondary h-100 p-0 text-decoration-none">
      <button className="menu-button btn-primary h-100 fs-3 text-start text-uppercase vtext" onClick={toggleSidebar}><i class="py-2 icon fa fa-cogs" style={{"transform": "rotate(90deg)"}} />EXAMPLES</button>
      <Collapse in={isOpen} className="float-start horizontal-collapsible-content overflow-hidden" style={{"width": "250px"}}>
        <Accordion defaultActiveKey="0" className="border-primary list-unstyled">
          {sideMenu.links.map((menu, index) => (
            <Card key={index}>
              <Accordion.Item eventKey={index.toString()}>
              <Accordion.Header>
                {menu.title}
              </Accordion.Header>
              <Accordion.Body className="p-0">
                <Card.Body className="p-0 text-nowrap">
                  <ListGroup variant="flush">
                    {menu.items.map((item, idx) => (
                      <ListGroup.Item action as={Link} to={item.href} key={idx} onClick={handleLinkClick}>
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
