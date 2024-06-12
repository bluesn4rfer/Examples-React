/*
import React from 'react';
import { Nav } from 'react-bootstrap';
*/

const sidebarData = {
  variant: "pills",
  defaultActiveKey: "/home",
  items: [
    { id: 1, label: "Dashboard", eventKey: "/home", href: "/home" },
    { id: 2, label: "Orders", eventKey: "link-1", href: "#link-1" },
    { id: 3, label: "Products", eventKey: "link-2", href: "#link-2" },
    { id: 4, label: "Customers", eventKey: "link-3", href: "#link-3" }
  ]
};

function App() {
  return (
    <Nav variant={sidebarData.variant} defaultActiveKey={sidebarData.defaultActiveKey} className="flex-column">
      {sidebarData.items.map(item => (
        <Nav.Item key={item.id}>
          <Nav.Link
            href={item.href}
            eventKey={item.eventKey}
          >
            {item.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}
