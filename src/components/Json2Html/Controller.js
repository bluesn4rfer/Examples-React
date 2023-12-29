import React from 'react';

const Json2Html = ({ json }) => {
  const transformJsonToElements = (json) => {
    if (typeof json !== 'object' || json === null) {
      // Return the json if it's a primitive value
      return json;
    }

    return Object.entries(json).reduce((elements, [key, value], index) => {
      if (typeof value === 'object' && value !== null) {
        // Process objects recursively
        const childElements = transformJsonToElements(value);
        if (key === 'children') {
          // 'children' is a special key, append its processed elements
          return [...elements, ...childElements];
        } else {
          // Process as a normal tag with props and children
          const props = { ...value, key: index };
          return [...elements, React.createElement(key, props)];
        }
      } else {
        // Process primitives as text nodes
        return [...elements, value];
      }
    }, []);
  };

  return <>{transformJsonToElements(json)}</>;
};

export default Json2Html;
