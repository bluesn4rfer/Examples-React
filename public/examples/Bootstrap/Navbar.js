/*
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
*/

const navbarData = {
  brand: "Navbar",
  links: [
    { id: 1, label: "Home", href: "#home" },
    { id: 2, label: "Link", href: "#link" }
  ],
  dropdown: {
    title: "Dropdown",
    items: [
      { id: 1, label: "Action", href: "#action/3.1" },
      { id: 2, label: "Another action", href: "#action/3.2" },
      { id: 3, label: "Something", href: "#action/3.3" },
      { id: 4, label: "Separated link", href: "#action/3.4", divider: true }
    ]
  }
};

function App() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">{navbarData.brand}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {navbarData.links.map(link => (
            <Nav.Link key={link.id} href={link.href}>
              {link.label}
            </Nav.Link>
          ))}
          <NavDropdown title={navbarData.dropdown.title} id="basic-nav-dropdown">
            {navbarData.dropdown.items.map((item, index) =>
              item.divider ? (
                <NavDropdown.Divider key={`divider-${index}`} />
              ) : (
                <NavDropdown.Item key={item.id} href={item.href}>
                  {item.label}
                </NavDropdown.Item>
              )
            )}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
