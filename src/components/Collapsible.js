import React, { useEffect } from 'react';

function Collapsible(props) {
	console.log('Collapsible.js props: '+JSON.stringify(props));

	const titleBarClick = () => {
		console.log('Collapsible.js titleBarClick invoked');
		document.getElementById(props.id+'Title').click();
	}

	if(props.direction && props.direction.toLowerCase() == 'left'){
		console.log('Collapsible.js direction left');
		return (
			<div className='bg-primary p-0 d-flex flex-row'>
				<div onClick={titleBarClick} className='d-flex' style={{cursor:'pointer'}}><a id={props.id+'Title'} className='p-1 pt-3 fs-3 vtext text-decoration-none text-light text-uppercase' href={'#'+props.id+'Details'} role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls={props.id+'Details'} >{props.title}</a></div>
				<div id={props.id+'Details'} className='h-100 flex-fill bg-light p-0 collapse collapse-horizontal collapsed'>{props.content}</div>
			</div>
		);
	}
	else if(props.direction && props.direction.toLowerCase() == 'right'){
		console.log('Collapsible.js direction right');
		return (
			<div className='bg-primary p-0 d-flex flex-row-reverse'>
				<div onClick={titleBarClick} className='d-flex' style={{cursor:'pointer'}}><a id={props.id+'Title'} className='p-1 pt-3 fs-3 vtext text-decoration-none text-light text-uppercase' href={'#'+props.id+'Details'} role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls={props.id+'Details'} >{props.title}</a></div>
				<div id={props.id+'Details'} className='h-100 flex-fill bg-light p-0 collapse collapse-horizontal collapsed'>{props.content}</div>
			</div>
		);
	}	
	else {
		console.log('Collapsible.js direction up');
		return (
			<div className='bg-primary p-0 d-flex flex-column'>
				<div onClick={titleBarClick} style={{width: '300px', cursor:'pointer'}}><a id={props.id+'Title'} className='p-1 fs-3 text-decoration-none text-light text-uppercase' href={'#'+props.id+'Details'} role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls={props.id+'Details'} >{props.title}</a></div>
				<div id={props.id+'Details'} className='h-100 flex-fill bg-light p-0 collapse collapsed' >{props.content}</div>
			</div>
	);
	}
}

export default Collapsible;
