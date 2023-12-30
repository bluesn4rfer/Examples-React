import React from 'react';

const Json2Html = ({ json }) => {
  const transformJsonToElements = (json) => {
    console.debug('Json2Html: Processing:', json);
    json.map((tag) => {
      const { children, ...tag } = ;
      console.debug('Json2Html: tag = ', tag);
      console.debug('json2Html: children = ', children);
    });

    // const [tagName, propsOrChildren] = Object.entries(json)[0];
    // const isProps = typeof propsOrChildren === 'object' && !Array.isArray(propsOrChildren);

    // if (isProps) {
    //   console.debug('Json2Html: Creating element:', tagName, propsOrChildren);
    //   return React.createElement(tagName, propsOrChildren, null);
    // } else if (Array.isArray(propsOrChildren)) {
    //   console.debug('Json2Html: Creating children for:', tagName, propsOrChildren);
    //   const children = propsOrChildren.map((child, index) => {
    //     const childTagName = Object.keys(child)[0]; // Get the tag name ("label", "input", etc.)
    //     const childProps = Object.values(child)[0]; // Get the props for the child element
    //     console.debug('Json2Html: Processing child:', child);
    //     return (
    //       <Json2Html key={index} json={{ [childTagName]: childProps }} />
    //     );
    //   });
    //   console.debug('Json2Html: Creating element with children:', tagName, children);
    //   return React.createElement(tagName, null, ...children);
    // }

    return null;
  };

  const element = transformJsonToElements(json);
  console.debug('Json2Html: Final element:', element);

  return element;
};

// const Json2Html = ({ json }) => {
//   const transformJsonToElements = (json) => {
//     if (typeof json !== 'object' || json === null) {
//       // Return the json if it's a primitive value
//       return json;
//     }

//     return Object.entries(json).reduce((elements, [key, value], index) => {
//       if (typeof value === 'object' && value !== null) {
//         // Process objects recursively
//         const childElements = transformJsonToElements(value);
//         if (key === 'children') {
//           // 'children' is a special key, append its processed elements
//           return [...elements, ...childElements];
//         } else {
//           // Process as a normal tag with props and children
//           const props = { ...value, key: index };
//           return [...elements, React.createElement(key, props)];
//         }
//       } else {
//         // Process primitives as text nodes
//         return [...elements, value];
//       }
//     }, []);
//   };

//   return <>{transformJsonToElements(json)}</>;
// };

export default Json2Html;
