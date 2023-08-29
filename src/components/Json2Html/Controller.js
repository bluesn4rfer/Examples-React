import React from 'react';

const Json2Html = ({ json }) => {
  console.log('Json2Html invoked');

  const [tagName, propsOrChildren] = Object.entries(json)[0];
  console.debug('Json2Html tagName = ' + tagName);
  console.debug('Json2Html propsOrChildren = ' + propsOrChildren);

  const isProps = typeof propsOrChildren === 'object' && !Array.isArray(propsOrChildren);
  console.debug('Json2Html isProps = ' + isProps);

  const props = isProps ? propsOrChildren : {};
  const children = isProps ? [] : propsOrChildren.map((child, index) => (
    <Json2Html key={index} json={child} />
  ));

  return React.createElement(tagName, props, children);
};

export default Json2Html;