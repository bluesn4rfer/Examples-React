import React, { useRef, useEffect, useState, createContext, useContext } from 'react';
import './collapsible.css';

// Create a context to hold the parent properties
const ParentContext = createContext();

function Collapsible({ children, direction = 'up', id, className, autoClose = false }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const menuRef = useRef(null);

  useEffect(() => {
	console.log('Collapsible/Controller.js autoClose = '+autoClose);

	const handleClickOutside = (event) => {
		console.log('Collapsible/Controller.js handleClickOutside() invoked');
		if(autoClose === true){	
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				console.log('Collapsible/Controller.js setting isCollapsed true');
				setIsCollapsed(true);
			}
		}
	};
	
	document.addEventListener('click', handleClickOutside);

	return () => {
		document.removeEventListener('click', handleClickOutside);
	};
  }, []);

  const handleTitleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const parentProps = { id, direction, isCollapsed, handleTitleClick };

  return (
	<ParentContext.Provider value={parentProps}>
    <div
		ref={menuRef}
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
				// data-bs-toggle="collapse"
				// aria-expanded={!isCollapsed}
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
			} ${isCollapsed ? 'collapsed' : 'show'}`}
		>
		{children}
		</div>
	);
}

Collapsible.Title = Title;
Collapsible.Content = Content;

export default Collapsible;