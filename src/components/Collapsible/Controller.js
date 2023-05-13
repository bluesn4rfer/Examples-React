import React, { useState } from 'react';

function Collapsible({ children, direction = 'up', id, title, titleClassName, className }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleTitleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`${className} d-flex flex-${
        direction === 'left' ? 'row' : direction === 'right' ? 'row-reverse' : 'column'
      }`}
    >
      <div
        onClick={handleTitleClick}
        style={{ width: direction === 'up' ? '300px' : 'auto', cursor: 'pointer' }}
      >
        <a
          id={`${id}Title`}
          className={`${titleClassName} pt-${direction === 'up' ? '3' : '0'} ${
            direction === 'left' || direction === 'right' ? 'vtext' : ''
          } text-light`}
          href={`#${id}Details`}
          role="button"
          data-bs-toggle="collapse"
          aria-expanded={!isCollapsed}
          aria-controls={`${id}Details`}
        >
          {title}
        </a>
      </div>
      <div
        id={`${id}Details`}
        className={`h-100 flex-fill bg-light p-0 collapse ${
          direction === 'left' || direction === 'right' ? 'collapse-horizontal' : ''
        } ${isCollapsed ? 'collapsed' : ''}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Collapsible;