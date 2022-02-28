import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GenerateMenu from './GenerateMenu';

function Menu(props){
	let menu = [
		{
			label: 'Change Theme',
			action: () => props.showThemeSelector(true)
		}
	];

	return (
		<GenerateMenu menu={menu} />
	);
}

export default Menu;
