import React from 'react';

const JsonRenderer = ({ json }) => {
  const [tagName, propsOrChildren] = Object.entries(json)[0];
  const isProps = typeof propsOrChildren === 'object' && !Array.isArray(propsOrChildren);

  const props = isProps ? propsOrChildren : {};
  const children = isProps ? [] : propsOrChildren.map((child, index) => (
    <JsonRenderer key={index} json={child} />
  ));

  return React.createElement(tagName, props, children);
};

export default JsonRenderer;