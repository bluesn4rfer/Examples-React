import React, { useState } from 'react';
import { Collapse, Accordion, Card, ListGroup } from 'react-bootstrap';

const componentsMenu = {
  links: [
    {
      title: 'Bootstrap',
      items: [
        { href: "/examples/Bootstrap/DropDown", text: 'Drop down' },
        { href: '/examples/Bootstrap/Navbar', text: 'Navbar' },
        { href: '/examples/Bootstrap/Nav', text: 'Nav' },
        { href: '/examples/Bootstrap/ItemVariants', text: 'Item Variants' },
        { href: '/examples/Bootstrap/Tabs', text: 'Tabs' },
        { href: '/examples/Bootstrap/Pagination', text: 'Pagination' },
        { href: '/examples/Bootstrap/Breadcrumbs', text: 'Breadcrumbs' },
        { href: '/examples/Bootstrap/Sidebar', text: 'Sidebar' },
      ],
    },
    {
      title: 'Menus',
      items: [
        { href: '/examples/DisplayMenu/Accordion', text: 'Accordion' },
        { href: "/examples/DisplayMenu/DropDown", text: 'Drop down' },
        { href: '/examples/DisplayMenu/Tabs', text: 'Tabs' },
      ],
    },
    {
      title: 'Views',
      items: [
        { href: "/examples/Collapsible/Collapsible", text: 'Collapsible' },
        { href: "/examples/Json2Html/FormTest", text: 'Json2Html' },
        { href: "/examples/DataGrid/Demo", text: 'Data Grid' },
        { href: "/examples/Calendar/Demo", text: 'Calendar' },
        { href: "/examples/Charts/Demo", text: 'Charts' },
      ],
    },
    {
      title: 'Forms',
      items: [
        { href: '/examples/DisplayForm/AllTypes', text: 'All Field Types' },
        { href: '/examples/DisplayForm/ContactUs', text: 'Contact Us' },
        { href: '/examples/DisplayForm/Login', text: 'Login' },
        { href: '/examples/DisplayForm/Registration', text: 'Registration' },
        { href: '/examples/DisplayForm/Survey', text: 'Survey' },
        { href: '/examples/DisplayForm/Newsletter', text: 'Newsletter Sign-up' },
        { href: '/examples/DisplayForm/Payment', text: 'Payment' },
        { href: '/examples/DisplayForm/FileUpload', text: 'File Upload' },
        { href: '/examples/DisplayForm/Feedback', text: 'Feedback' },
        { href: '/examples/DisplayForm/Comment', text: 'Comment' },
        { href: '/examples/DisplayForm/RSVP', text: 'RSVP' },
        { href: '/examples/DisplayForm/PasswordReset', text: 'Password Reset' },
        { href: '/examples/DisplayForm/SubscriptionCancellation', text: 'Subscription Cancellation' },
      ],
    },
    {
      title: 'Icons',
      items: [
        { href: "/icons/FontAwesome", text: 'Font Awesome' },
      ],
    },
  ],
};

function ComponentsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='sidebar'>
      <button className="menu-button" onClick={toggleSidebar}>
        MENU
      </button>
      <Collapse in={isOpen}>
        <Accordion defaultActiveKey="0" className="border-primary list-unstyled">
          {componentsMenu.links.map((menu, index) => (
            <Card key={index}>
              <Accordion.Header as={Card.Header} eventKey={index.toString()}>
                {menu.title}
              </Accordion.Header>
              <Accordion.Body eventKey={index.toString()}>
                <Card.Body>
                  <ListGroup variant="flush">
                    {menu.items.map((item, idx) => (
                      <ListGroup.Item action href={item.href} key={idx}>
                        {item.text}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Accordion.Body>
            </Card>
          ))}
        </Accordion>
      </Collapse>
    </div>
  );
}

export default ComponentsMenu;
