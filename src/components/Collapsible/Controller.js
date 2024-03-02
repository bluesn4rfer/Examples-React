import React, { useEffect, useState, createContext, useContext } from 'react';
import './collapsible.css';

// Create a context to hold the parent properties
const ParentContext = createContext();

function Collapsible({ children, direction = 'up', id, className = '', autoClose = true }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

	useEffect(() => {
		const handleDocumentClick = (event) => {
			if (!document.getElementById(id)?.contains(event.target) && autoClose) {
				setIsCollapsed(true);
			}
		};
		
		document.addEventListener('mousedown', handleDocumentClick);
		
		return () => {
			document.removeEventListener('mousedown', handleDocumentClick);
		};
	}, [id, autoClose]);

  const handleTitleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  const parentProps = { id, direction, isCollapsed, setIsCollapsed, handleTitleClick };

  const directionClass = {
	top: 'flex-column-reverse',
	bottom: 'flex-column',
	start: 'flex-row-reverse',
	end: 'flex-row',
  };

  return (
	<ParentContext.Provider value={parentProps}>
    <div
		id={`${id}`}
		tabIndex="0"
      	className={`${className} d-flex ${directionClass[direction] || ''}`}
    >
		{children}
    </div>
	</ParentContext.Provider>
  );
}

// Title component
const Title = ({ id, children, className = '', style = {}, onClick, ...props}) => {
	const { id: parentId, handleTitleClick } = useContext(ParentContext);

	const handleClick = (event) => {
		console.log('Collapsible/Controller.js Title handleClick() invoked');
		event.preventDefault();
		event.stopPropagation();
		handleTitleClick();
		if(onClick){
			onClick();
		}
	}

	return (
		<div
			id={`${parentId}Title`}
			onClick={handleClick}
			className={className}
			style={{ ...style, cursor: 'pointer', userSelect: 'none' }}
			{...props}
		>{children}
		</div>
	);
}

// Content component
const Content = ({ id, children, className = '', onMouseDown, ...props}) => {
	const { height = 'auto', width = 'auto' } = props.style ? props.style : {};

	const {id: parentId, direction, isCollapsed, setIsCollapsed } = useContext(ParentContext);

	const directionClass = {
		top: 'collapse-top',
		bottom: 'collapse-bottom',
		start: 'collapse-start',
		end: 'collapse-end',
	  };

	    // Event delegation for handling link clicks
		const handleContentClick = (event) => {
			const target = event.target;
			// Check if the clicked element is a link and does not have the 'exclude-collapse' class
			if (target.tagName === 'A' && !target.classList.contains('exclude-collapse')) {
			console.log('Collapsible/Controller.js handleLinkClick() invoked');
			setIsCollapsed(true);
			}
		};

	return (
		<div
			id={`${parentId}Content`}
			onClick={handleContentClick}		
			className={`${className} ${directionClass[direction] || ''} ${isCollapsed ? 'collapsed' : 'show'}`}
			{...props}
			style={{width: width, height: height}}
		>
			<div style={{width: width, height: height}}>{children}</div>
		</div>
	);
}

Collapsible.Title = Title;
Collapsible.Content = Content;

export default Collapsible;