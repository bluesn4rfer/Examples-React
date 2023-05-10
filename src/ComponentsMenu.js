import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Collapsible from './components/Collapsible/Controller';
import DisplayMenu from './components/Menus/Controller';

const mapDispatchToProps = dispatch => ({
	// increment: () => dispatch({ type: 'INCREMENT' }),
	// decrement: () => dispatch({ type: 'DECREMENT' }),
	updateTestPage: (page) => dispatch({ type: 'UPDATE_STATE', component: 'App', payload: {page: page} })
});

function ComponentsMenu(props) {
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

	const handleMenuClick = (menuItem) => {
		console.log('handleMenuClick() menuItem = '+JSON.stringify(menuItem));
		if(!menuItem.href){
			props.updateTestPage(menuItem.label);
		}
	}

	return (
		<Collapsible id='menuHCollapse' direction='right' title='COMPONENTS'>
			<DisplayMenu menuData={menuData} callback={handleMenuClick} />
		</Collapsible>
	);
}

export default connect(null, mapDispatchToProps)(ComponentsMenu);

