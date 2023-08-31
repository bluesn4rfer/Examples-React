import React from 'react';

const Json2Html = ({ json }) => {
  const transformJsonToElements = (json) => {
    console.debug('Processing:', json);

    const [tagName, propsOrChildren] = Object.entries(json)[0];
    const isProps = typeof propsOrChildren === 'object' && !Array.isArray(propsOrChildren);

    if (isProps) {
      console.debug('Creating element:', tagName, propsOrChildren);
      return React.createElement(tagName, propsOrChildren, null);
    } else if (Array.isArray(propsOrChildren)) {
      console.debug('Creating children for:', tagName, propsOrChildren);
      const children = propsOrChildren.map((child, index) => {
        const childTagName = Object.keys(child)[0]; // Get the tag name ("label", "input", etc.)
        const childProps = Object.values(child)[0]; // Get the props for the child element
        console.debug('Processing child:', child);
        return (
          <Json2Html key={index} json={{ [childTagName]: childProps }} />
        );
      });
      console.debug('Creating element with children:', tagName, children);
      return React.createElement(tagName, null, ...children);
    }

    return null;
  };

  const element = transformJsonToElements(json);
  console.debug('Final element:', element);

  return element;
};

export default Json2Html;