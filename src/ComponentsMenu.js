import React from 'react';
import Collapsible from './components/Collapsible/Controller';
import DisplayMenu from './components/Menus/Controller';

function ComponentsMenu({menuData}) {
	return (
		<Collapsible id='menuHCollapse' direction='right' className='h-100 border-top border-bottom border-end border-primary border-3 rounded-end p-0'>
			<Collapsible.Title className='btn-primary h-100 p-1 fs-3 text-decoration-none text-uppercase pt-0 vtext'>COMPONENTS</Collapsible.Title>
			<Collapsible.Content><DisplayMenu menuData={menuData} /></Collapsible.Content>
		</Collapsible>
	);
}

export default ComponentsMenu;

