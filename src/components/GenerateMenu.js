import React from 'react';

function GenerateMenu(props){
	if(!props.menu){
		console.log('GenerateMenu.js props.menu is null');
		return null;
	}

	return (
			<div>
				<button className='btn btn-success dropdown-toggle' data-bs-toggle='dropdown'><i className='icon fa fa-bars' /></button>
				<div className='dropdown-menu theme-success border-0 p-0 m-0'>
					<div className='d-grid'>
		{props.menu.map((menuitem, index) => (
			<button key={'menuitem_' + index} className='btn btn-lg btn-success my-0 border-secondary' onClick={menuitem.action}>{menuitem.label}</button>
		))}
					</div>
				</div>
			</div>
	);
}

export default GenerateMenu;
