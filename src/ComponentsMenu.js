import React from 'react';
import Collapsible from './components/Collapsible/Controller';
import DisplayMenu from './components/Menus/Controller';

function ComponentsMenu({menuData}) {
	return (
		<Collapsible id='componentsMenu' direction='start' autoClose={true} className='h-100 theme-secondary border-top border-bottom border-end border-primary border-3 rounded-end p-0'>
			<Collapsible.Title className='btn-primary h-100 p-1 fs-3 text-decoration-none text-uppercase pt-0 vtext' style={{width: '50px'}}><i className='py-2 icon fa fa-cogs' style={{transform: 'rotate(90deg)'}}/>COMPONENTS</Collapsible.Title>
			<Collapsible.Content style={{width: '250px'}}><DisplayMenu menu={menuData} /></Collapsible.Content>
		</Collapsible>
	);
}

export default ComponentsMenu;

