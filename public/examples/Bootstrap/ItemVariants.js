/*
import React from 'react';
import { Dropdown } from 'react-bootstrap';
*/

const menuItemVariantsData = {
  title: "Dropdown Button",
  items: [
    { id: 1, label: "Header", type: "header" },
    { id: 2, label: "Action", href: "#/action-1" },
    { id: 3, label: "Another action", href: "#/action-2" },
    { id: 4, label: "Something else here", href: "#/action-3" },
    { id: 5, type: "divider" },
    { id: 6, label: "Separated link", href: "#/action-4" },
    { id: 7, label: "Disabled link", href: "#/action-5", disabled: true }
  ]
};

function App() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {menuItemVariantsData.title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {menuItemVariantsData.items.map((item, index) => {
          if (item.type === "header") {
            return <Dropdown.Header key={item.id}>{item.label}</Dropdown.Header>;
          } else if (item.type === "divider") {
            return <Dropdown.Divider key={`divider-${index}`} />;
          } else {
            return (
              <Dropdown.Item key={item.id} href={item.href} disabled={item.disabled}>
                {item.label}
              </Dropdown.Item>
            );
          }
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

