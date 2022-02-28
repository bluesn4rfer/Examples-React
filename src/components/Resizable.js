import React, { useEffect } from 'react';

function Resizable(props) {
	const sidePanelRef = React.createRef();

	const handleClick = (event) => {
		console.log('Resizable.js handleClick invoked');

		let clientX = event.clientX;
		let clientY = event.clientY;

		console.log('Resizable.js clientX: '+clientX);
		console.log('Resizable.js clientY: '+clientY);

		let edgeTop = sidePanelRef.current.getBoundingClientRect().top;
		let edgeBottom = sidePanelRef.current.getBoundingClientRect().bottom;
		let edgeLeft = sidePanelRef.current.getBoundingClientRect().left;
		let edgeRight = sidePanelRef.current.getBoundingClientRect().right;

		console.log('Resizable.js edgeTop: '+edgeTop);
		console.log('Resizable.js edgeBottom: '+edgeBottom);
		console.log('Resizable.js edgeLeft: '+edgeLeft);
		console.log('Resizable.js edgeRight: '+edgeRight);

		let computedStyle = getComputedStyle(document.getElementById(props.id),null);

		let borderTopWidth = computedStyle.getPropertyValue('border-top-width');
		let borderBottomWidth = computedStyle.getPropertyValue('border-bottom-width');		
		let borderLeftWidth = computedStyle.getPropertyValue('border-left-width');
		let borderRightWidth = computedStyle.getPropertyValue('border-right-width');

		console.log('Resizable.js borderTopWidth: '+borderTopWidth);
		console.log('Resizable.js borderBottomWidth: '+borderBottomWidth);
		console.log('Resizable.js borderLeftWidth: '+borderLeftWidth);
		console.log('Resizable.js borderRightWidth: '+borderRightWidth);		

		if(parseInt(clientX) + parseInt(clientY) == 0){
			console.log('click triggered by programming');
		}
		else if(parseInt(clientY) - parseInt(edgeTop) <= parseInt(borderTopWidth)){
			console.log('clicked top border');
		}
		else if(parseInt(edgeBottom) - parseInt(clientY) <= parseInt(borderBottomWidth)){
			console.log('clicked bottom border');
		}
		else if(parseInt(clientX) - parseInt(edgeLeft) <= parseInt(borderLeftWidth)){
			console.log('clicked left border');
		}
		else if(parseInt(edgeRight) - parseInt(clientX) <= parseInt(borderRightWidth)){
			console.log('clicked right border');
		}
		else {
			// BORDER WAS NOT CLICKED
		}		
	}

	const handleMouseMove = (event) => {
		console.log('Resizable.js handleClick invoked');

		let clientX = event.clientX;
		let clientY = event.clientY;

		console.log('Resizable.js clientX: '+clientX);
		console.log('Resizable.js clientY: '+clientY);

		if(props.disabled){
			console.log('Resizable.js resize disabled');
		}
		else{		
			let edgeTop = sidePanelRef.current.getBoundingClientRect().top;
			let edgeBottom = sidePanelRef.current.getBoundingClientRect().bottom;
			let edgeLeft = sidePanelRef.current.getBoundingClientRect().left;
			let edgeRight = sidePanelRef.current.getBoundingClientRect().right;

			console.log('Resizable.js edgeTop: '+edgeTop);
			console.log('Resizable.js edgeBottom: '+edgeBottom);
			console.log('Resizable.js edgeLeft: '+edgeLeft);
			console.log('Resizable.js edgeRight: '+edgeRight);

			let computedStyle = getComputedStyle(document.getElementById(props.id),null);

			let borderTopWidth = computedStyle.getPropertyValue('border-top-width');
			let borderBottomWidth = computedStyle.getPropertyValue('border-bottom-width');		
			let borderLeftWidth = computedStyle.getPropertyValue('border-left-width');
			let borderRightWidth = computedStyle.getPropertyValue('border-right-width');

			console.log('Resizable.js borderTopWidth: '+borderTopWidth);
			console.log('Resizable.js borderBottomWidth: '+borderBottomWidth);
			console.log('Resizable.js borderLeftWidth: '+borderLeftWidth);
			console.log('Resizable.js borderRightWidth: '+borderRightWidth);		


			if(parseInt(clientY) - parseInt(edgeTop) <= parseInt(borderTopWidth)){
				document.getElementById(props.id).style.cursor = 'ns-resize';
			}
			else if(parseInt(edgeBottom) - parseInt(clientY) <= parseInt(borderBottomWidth)){
				document.getElementById(props.id).style.cursor = 'ns-resize';
			}
			else if(parseInt(clientX) - parseInt(edgeLeft) <= parseInt(borderLeftWidth)){
				document.getElementById(props.id).style.cursor = 'ew-resize';
			}
			else if(parseInt(edgeRight) - parseInt(clientX) <= parseInt(borderRightWidth)){
				document.getElementById(props.id).style.cursor = 'ew-resize';
			}
			else {
				document.getElementById(props.id).style.cursor = 'auto';
			}
		}
	}

	return (
		<div id={props.id} ref={sidePanelRef} className='h-100 bg-primary border border-primary border-4 rounded-3 p-0 m-0 d-flex flex-row' onClick={handleClick} onMouseMove={handleMouseMove} style={{minWidth: '50px'}}>
			{props.content}
		</div>
	);
}

export default Resizable;
