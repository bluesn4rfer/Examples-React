import React, { useEffect, useState, createContext, useContext } from 'react';
import './collapsible.css';

// Create a context to hold the parent properties
const ParentContext = createContext();

function Collapsible({ children, direction = 'up', id, className = '', autoClose = true }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

	const handleClickOutside = (event) => {
		console.log('Collapsible/Controller.js handleClickOutside() invoked');
		if(autoClose === true){	
			console.log('Collapsible/Controller.js setting isCollapsed true');
			setIsCollapsed(true);
		}
	};

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
		onBlur={handleClickOutside}
      	className={`${className} d-flex ${directionClass[direction] ? directionClass[direction] : ''}`}
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

	  const handleLinkClick = (setIsCollapsed) => {
		console.log('Collapsible/Controller.js handleLinkClick() invoked');
		// Trigger the parent's onBlur event
		// const parentElement = document.getElementById(`${id}Details`).parentElement;
		// parentElement.dispatchEvent(new FocusEvent('blur'));
		setIsCollapsed(true);
	  };
	
	  // Attach click event listeners to the links
	  useEffect(() => {
		const linkElements = document.querySelectorAll(`#${parentId}Content a`);
		linkElements.forEach((linkElement) => {
			if (linkElement.classList.contains('exclude-collapse')) {
				return;
			}

		  	linkElement.addEventListener('click', () => handleLinkClick(setIsCollapsed));
		});
	
		// Cleanup the event listeners when the component unmounts
		return () => {
		  linkElements.forEach((linkElement) => {
			linkElement.removeEventListener('click', () => handleLinkClick(setIsCollapsed));
		  });
		};
	  }, [parentId, setIsCollapsed]);

	const handleMouseDown = (event) => {
		console.log('Collapsible/Controller.js Content handleMouseDown() invoked');
		event.preventDefault();
		event.stopPropagation();		
	}

	return (
		<div
			id={`${parentId}Content`}		
			onMouseDown={handleMouseDown}
			className={`${className} ${directionClass[direction] ? directionClass[direction] : ''} ${isCollapsed ? 'collapsed' : 'show'}`}
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