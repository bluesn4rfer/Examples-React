import React from 'react';

const Json2Html = ({ json }) => {
  function createElementFromJson(obj) {
    // Check if the object is undefined or null
    if (!obj) {
      return null;
    }

    // If the object is a string, return it as is (as text content)
    if (typeof obj === 'string') {
      return obj;
    }

    // Destructure the tag, props, and children from the JSON object
    const { tag, props, children } = obj;

    // Process children based on their type
    let processedChildren;
    if (Array.isArray(children)) {
      processedChildren = children.map(child => createElementFromJson(child));
    } else if (typeof children === 'string') {
      processedChildren = children;
    } else if (typeof children === 'object') {
      processedChildren = createElementFromJson(children);
    } else {
      processedChildren = null;
    }

    // Create and return the React element
    return React.createElement(tag, { ...props, key: Math.random() }, processedChildren);
  }

  return createElementFromJson(json);
}

export default Json2Html;
