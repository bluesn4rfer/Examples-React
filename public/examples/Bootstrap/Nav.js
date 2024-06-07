/*
import React from 'react';
import { Nav } from 'react-bootstrap';
*/

const navData = {
  variant: "tabs",
  defaultActiveKey: "/home",
  items: [
    { id: 1, label: "Active", eventKey: "/home", href: "/home" },
    { id: 2, label: "Link", eventKey: "link-1", href: "#link-1" },
    { id: 3, label: "Disabled", eventKey: "disabled", disabled: true }
  ]
};

function App() {
  return (
    <Nav variant={navData.variant} defaultActiveKey={navData.defaultActiveKey}>
      {navData.items.map(item => (
        <Nav.Item key={item.id}>
          <Nav.Link
            href={item.href}
            eventKey={item.eventKey}
            disabled={item.disabled}
          >
            {item.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

