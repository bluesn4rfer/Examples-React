/*
import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
*/

const tabsData = {
  defaultActiveKey: "home",
  tabs: [
    { eventKey: "home", title: "Home", content: "Home content" },
    { eventKey: "profile", title: "Profile", content: "Profile content" },
    { eventKey: "contact", title: "Contact", content: "Contact content" }
  ]
};

function App() {
  return (
    <Tabs defaultActiveKey={tabsData.defaultActiveKey} id="uncontrolled-tab-example">
      {tabsData.tabs.map(tab => (
        <Tab eventKey={tab.eventKey} title={tab.title} key={tab.eventKey}>
          <div>{tab.content}</div>
        </Tab>
      ))}
    </Tabs>
  );
}

