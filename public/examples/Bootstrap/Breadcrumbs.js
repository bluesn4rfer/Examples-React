/*
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
*/

const breadcrumbData = {
  items: [
    { href: "#home", label: "Home" },
    { href: "#library", label: "Library" },
    { href: "#data", label: "Data" }
  ]
};

function App() {
  return (
    <Breadcrumb>
      {breadcrumbData.items.map(item => (
        <Breadcrumb.Item href={item.href} key={item.label} active={item.href === '#data'}>
          {item.label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}
