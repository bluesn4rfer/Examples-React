import React, { useEffect } from 'react';
import Collapsible from './components/Collapsible/Controller';
import DisplayMenu from './components/Menus/Controller';

function ComponentsMenu() {
	const menuData = {
		class: 'accordion-menu list-unstyled',
		items: [
			{
				label: 'Forms',
				icon: 'fa-bars',
				href: '#forms-menu',
				class: 'd-block list-unstyled collapsed',
				toggle: 'collapse',
				expanded: 'false',
				menu: {
					id: 'forms-menu',
					class: 'accordion-menu list-unstyled collapse',
					items: [
						{
							label: 'Contact Us',
							class: 'd-block'
						},
						{
							label: 'Login',
							class: 'd-block'
						},
						{
							label: 'Registration',
							class: 'd-block'
						},
						{
							label: 'Survey',
							class: 'd-block'
						},
						{
							label: 'Newsletter Sign-up',
							class: 'd-block'
						},
						{
							label: 'Payment',
							class: 'd-block'
						},
						{
							label: 'File Upload',
							class: 'd-block'
						},
						{
							label: 'Feedback',
							class: 'd-block'
						},
						{
							label: 'Comment',
							class: 'd-block'
						},
						{
							label: 'RSVP',
							class: 'd-block'
						},
						{
							label: 'Password Reset',
							class: 'd-block'
						},
						{
							label: 'Subscription Cancellation',
							class: 'd-block'
						}
					]
				} 
			},
			{
				label: 'Menus',
				href: '#menus-menu',
				class: 'd-block list-unstyled collapsed',
				toggle: 'collapse',
				expanded: 'false',				
				menu: {
					id: 'menus-menu',
					class: 'accordion-menu list-unstyled collapse',
					items: [
						{
							label: 'Drop down',
							class: 'd-block'
						},
						{
							label: 'Accordion',
							class: 'd-block'
						}
					]
				}
			}
		]
	};

	return (
		<Collapsible id='menuHCollapse' direction='right' title='COMPONENTS'>
			<DisplayMenu menuData={menuData} />
		</Collapsible>
	);
}

export default ComponentsMenu;
