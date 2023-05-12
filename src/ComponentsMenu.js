import React from 'react';
import { connect } from 'react-redux';
import Collapsible from './components/Collapsible/Controller';
import DisplayMenu from './components/Menus/Controller';

const mapDispatchToProps = dispatch => ({
	// increment: () => dispatch({ type: 'INCREMENT' }),
	// decrement: () => dispatch({ type: 'DECREMENT' }),
	updatePage: (page) => dispatch({ type: 'UPDATE_STATE', component: 'App', payload: {page: page} })
});

function ComponentsMenu({callback, ...props}) {
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
							id: 'ExampleFormContactUs',
							label: 'Contact Us',
							class: 'd-block'
						},
						{
							id: 'ExampleFormLogin',
							label: 'Login',
							class: 'd-block'
						},
						{
							id: 'ExampleFormRegistration',
							label: 'Registration',
							class: 'd-block'
						},
						{
							id: 'ExampleFormSurvey',
							label: 'Survey',
							class: 'd-block'
						},
						{
							id: 'ExampleFormNewsletter',
							label: 'Newsletter Sign-up',
							class: 'd-block'
						},
						{
							id: 'ExampleFormPayment',
							label: 'Payment',
							class: 'd-block'
						},
						{
							id: 'ExampleFormFileUpload',
							label: 'File Upload',
							class: 'd-block'
						},
						{
							id: 'ExampleFormFeedback',
							label: 'Feedback',
							class: 'd-block'
						},
						{
							id: 'ExampleFormComment',
							label: 'Comment',
							class: 'd-block'
						},
						{
							id: 'ExampleFormRSVP',
							label: 'RSVP',
							class: 'd-block'
						},
						{
							id: 'ExampleFormPasswordReset',
							label: 'Password Reset',
							class: 'd-block'
						},
						{
							id: 'ExampleFormSubscriptionCancellation',
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
		console.log('ComponentsMenu.js: handleMenuClick() invoked');
		if(callback){
			callback(menuItem);
		}
	}

	return (
		<Collapsible id='menuHCollapse' direction='right' title='COMPONENTS'>
			<DisplayMenu menuData={menuData} callback={handleMenuClick} />
		</Collapsible>
	);
}

export default connect(null, mapDispatchToProps)(ComponentsMenu);

