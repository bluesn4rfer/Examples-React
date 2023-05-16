import React, { useState, createContext, useContext } from 'react';

// Create a context to hold the parent properties
const ParentContext = createContext();

function Collapsible({ children, direction = 'up', id, className }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleTitleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const parentProps = { id, direction, isCollapsed, handleTitleClick };

  return (
	<ParentContext.Provider value={parentProps}>
    <div
      className={`${className} d-flex flex-${
        direction === 'left' ? 'row' : direction === 'right' ? 'row-reverse' : 'column'
      }`}
    >
		{children}
    </div>
	</ParentContext.Provider>
  );
}

// Title component
const Title = ({ children, className }) => {
	const { id, direction, isCollapsed, handleTitleClick } = useContext(ParentContext);

	return (
		<div
			onClick={handleTitleClick}
			style={{ width: direction === 'up' ? '300px' : 'auto', cursor: 'pointer' }}
		>
			<a
				id={`${id}Title`}
				className={`${className} pt-${direction === 'up' ? '3' : '0'} ${
				direction === 'left' || direction === 'right' ? 'vtext' : ''
				} text-light`}
				href={`#${id}Details`}
				role="button"
				data-bs-toggle="collapse"
				aria-expanded={!isCollapsed}
				aria-controls={`${id}Details`}
			>{children}</a>
		</div>
	);
}

// Content component
const Content = ({ children }) => {
	const {id, direction, isCollapsed } = useContext(ParentContext);

	return (
		<div
			id={`${id}Details`}
			className={`h-100 p-0 collapse ${
			direction === 'left' || direction === 'right' ? 'collapse-horizontal' : ''
			} ${isCollapsed ? 'collapsed' : ''}`}
		>
		{children}
		</div>
	);
}

Collapsible.Title = Title;
Collapsible.Content = Content;

export default Collapsible;