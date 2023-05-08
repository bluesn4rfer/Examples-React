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
							class: 'd-block',
							callback: {
								action: "setShowThemeSelector", 
								params: true
							}
						},
						{
							label: 'Login',
							class: 'd-block',
							callback: {
								action: "setShowThemeSelector", 
								params: true
							}
						},
						{
							label: 'Registration',
							class: 'd-block',
							callback: {
								action: "setShowThemeSelector", 
								params: true
							}
						},
						{
							label: 'Survey',
							class: 'd-block',
							callback: {
								action: "setShowThemeSelector", 
								params: true
							}
						},
						{
							label: 'Newsletter Sign-up',
							class: 'd-block',
							callback: {
								action: "setShowThemeSelector", 
								params: true
							}
						},
						{
							label: 'Payment',
							class: 'd-block',
							callback: {
								action: "setShowThemeSelector", 
								params: true
							}
						},
						{
							label: 'File Upload',
							class: 'd-block',
							callback: {
								action: "setShowThemeSelector", 
								params: true
							}
						},
						{
							label: 'Feedback',
							class: 'd-block',
							callback: {
								action: "setShowThemeSelector", 
								params: true
							}
						},
						{
							label: 'Comment',
							class: 'd-block',
							callback: {
								action: "setShowThemeSelector", 
								params: true
							}
						},
						{
							label: 'RSVP',
							class: 'd-block',
							callback: {
								action: "setShowThemeSelector", 
								params: true
							}
						},
						{
							label: 'Password Reset',
							class: 'd-block',
							callback: {
								action: "setShowThemeSelector", 
								params: true
							}
						},
						{
							label: 'Subscription Cancellation',
							class: 'd-block',
							callback: {
								action: "setShowThemeSelector", 
								params: true
							}
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
