import React from 'react';

function Resizable({children, ...props}) {
	const sidePanelRef = React.createRef();

	const handleClick = (event) => {
		console.log('Resizable.js handleClick invoked');

		let clientX = event.clientX;
		let clientY = event.clientY;

		console.log('Resizable.js clientX: '+clientX);
		console.log('Resizable.js clientY: '+clientY);

    const { edgeTop, edgeBottom, edgeLeft, edgeRight } = sidePanelRef.current.getBoundingClientRect();

		console.log('Resizable.js edgeTop: '+edgeTop);
		console.log('Resizable.js edgeBottom: '+edgeBottom);
		console.log('Resizable.js edgeLeft: '+edgeLeft);
		console.log('Resizable.js edgeRight: '+edgeRight);

		let computedStyle = getComputedStyle(sidePanelRef.current);

		let borderTopWidth = computedStyle.getPropertyValue('border-top-width');
		let borderBottomWidth = computedStyle.getPropertyValue('border-bottom-width');		
		let borderLeftWidth = computedStyle.getPropertyValue('border-left-width');
		let borderRightWidth = computedStyle.getPropertyValue('border-right-width');

		console.log('Resizable.js borderTopWidth: '+borderTopWidth);
		console.log('Resizable.js borderBottomWidth: '+borderBottomWidth);
		console.log('Resizable.js borderLeftWidth: '+borderLeftWidth);
		console.log('Resizable.js borderRightWidth: '+borderRightWidth);		

		if(parseInt(clientX) + parseInt(clientY) === 0){
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
		console.log('Resizable.js handleMouseMove invoked');

		let clientX = event.clientX;
		let clientY = event.clientY;

		console.log('Resizable.js clientX: '+clientX);
		console.log('Resizable.js clientY: '+clientY);

		if(props.disabled){
			console.log('Resizable.js resize disabled');
      return;
		}
	
    const { top: edgeTop, bottom: edgeBottom, left: edgeLeft, right: edgeRight } = sidePanelRef.current.getBoundingClientRect();

    console.log('Resizable.js edgeTop: '+edgeTop);
    console.log('Resizable.js edgeBottom: '+edgeBottom);
    console.log('Resizable.js edgeLeft: '+edgeLeft);
    console.log('Resizable.js edgeRight: '+edgeRight);

    let computedStyle = getComputedStyle(sidePanelRef.current);

    let borderTopWidth = computedStyle.getPropertyValue('border-top-width');
    let borderBottomWidth = computedStyle.getPropertyValue('border-bottom-width');		
    let borderLeftWidth = computedStyle.getPropertyValue('border-left-width');
    let borderRightWidth = computedStyle.getPropertyValue('border-right-width');

    console.log('Resizable.js borderTopWidth: '+borderTopWidth);
    console.log('Resizable.js borderBottomWidth: '+borderBottomWidth);
    console.log('Resizable.js borderLeftWidth: '+borderLeftWidth);
    console.log('Resizable.js borderRightWidth: '+borderRightWidth);		


    if(parseInt(clientY) - parseInt(edgeTop) <= parseInt(borderTopWidth)){
      document.body.style.cursor = 'ns-resize';
    }
    else if(parseInt(edgeBottom) - parseInt(clientY) <= parseInt(borderBottomWidth)){
      document.body.style.cursor = 'ns-resize';
    }
    else if(parseInt(clientX) - parseInt(edgeLeft) <= parseInt(borderLeftWidth)){
      document.body.style.cursor = 'ew-resize';
    }
    else if(parseInt(edgeRight) - parseInt(clientX) <= parseInt(borderRightWidth)){
      document.body.style.cursor = 'ew-resize';
    }
    else {
      document.body.style.cursor = 'auto';
    }
	}

	return (
		<div
      id={props.id} 
      ref={sidePanelRef} 
      className='h-100 bg-primary border border-primary border-4 rounded-3 p-0 m-0 d-flex flex-row' 
      onClick={handleClick} 
      onMouseMove={handleMouseMove} 
      style={{minWidth: '50px'}}
      >{children}
		</div>
	);
}

export default Resizable;