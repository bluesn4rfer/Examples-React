import React from 'react';
import Collapsible from './components/Collapsible/Controller';
import DisplayMenu from './components/Menus/Controller';

const componentsMenu = {
	className: 'border-primary list-unstyled',
	style: { width: '250px' },
	links: [
		{
			link: (<a href='#menus-menu' className='d-block btn-primary list-unstyled collapsed text-decoration-none exclude-collapse' data-bs-toggle="collapse" aria-expanded="true"><i className='p-2 icon fa fa-bars' />Bootstrap</a>),			
			menu: {
				id: 'menus-menu',
				className: 'list-unstyled collapse show',
				links: [
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: "/examples/Bootstrap/DropDown",
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Drop down')
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/Bootstrap/Navbar'
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Navbar
					},						
					{
						href: '/examples/Bootstrap/Nav'
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Nav
					},
					{
						href: '/examples/Bootstrap/ItemVariants'
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Item Variants
					},
					{
						href: '/examples/Bootstrap/Tabs'
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Tabs
					},
					{
						href: '/examples/Bootstrap/Pagination'
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Pagination
					},
					{
						href: '/examples/Bootstrap/Breadcrumbs'
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Breadcrumbs
					},
					{
						href: '/examples/Bootstrap/Sidebar'
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Sidebar
					}												
				]
			}
		},			
		{
			link: (<a href='#menus-menu' className='d-block btn-primary list-unstyled collapsed text-decoration-none exclude-collapse' data-bs-toggle="collapse" aria-expanded="true"><i className='p-2 icon fa fa-bars' />Menus</a>),			
			menu: {
				id: 'menus-menu',
				className: 'list-unstyled collapse show',
				links: [
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayMenu/Accordion'
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Accordion
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: "/examples/DisplayMenu/DropDown"
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Drop down
					},
					{
						href: '/examples/DisplayMenu/Tabs'
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Tabs
					}
				]
			}
		},
		{
			link: (<a href='#views-menu' className='d-block btn-primary list-unstyled collapsed text-decoration-none exclude-collapse' data-bs-toggle="collapse" aria-expanded="true"><i className='p-2 icon fa fa-eye' />Views</a>),			
			menu: {
				id: 'views-menu',
				className: 'list-unstyled collapse show',
				links: [
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: "/examples/Collapsible/Collapsible",
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Collapsible
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: "/examples/Json2Html/FormTest",
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Json2Html
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: "/examples/DataGrid/Demo",
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Data Grid
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: "/examples/Calendar/Demo",
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Calendar
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: "/examples/Charts/Demo",
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Charts
					}											
				]
			}
		},			
		{
			link: (<a href='#forms-menu' className='btn-primary d-block list-unstyled text-decoration-none exclude-collapse' data-bs-toggle="collapse" aria-expanded="true"><i className='p-2 icon fa fa-pencil' />Forms</a>),
			menu: {
				id: 'forms-menu',
				className: 'list-unstyled collapse show',
				links: [
					{ 
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/AllTypes',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>All Field Types
					},
					{ 
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/ContactUs',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Contact Us
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/Login',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Login
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/Registration',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Registration
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/Survey',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Survey
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/Newsletter',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Newsletter Sign-up
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/Payment',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Payment
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/FileUpload',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>File Upload
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/Feedback',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Feedback
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/Comment',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Comment
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/RSVP',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>RSVP
					},						
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/PasswordReset',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Password Reset
					},
					{
						href: '/examples/DisplayForm/SubscriptionCancellation',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Subscription Cancellation
					}
				]
			} 
		},
		{
			link: (<a href='#icons-menu' className='d-block btn-primary list-unstyled collapsed text-decoration-none exclude-collapse' data-bs-toggle="collapse" aria-expanded="true"><i className='p-2 icon fa fa-magic' />Icons</a>),			
			menu: {
				id: 'icons-menu',
				className: 'list-unstyled collapse show',
				links: [
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: "/icons/FontAwesome",
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none'>Font Awesome
					}
				]
			}
		},			

	]
};

function ComponentsMenu() {
	return (
		<Collapsible id='componentsMenu' direction='start' autoClose={true} className='h-100 theme-secondary border-top border-bottom border-end border-primary border-3 rounded-end p-0'>
			<Collapsible.Title className='btn-primary h-100 p-1 fs-3 text-decoration-none text-uppercase pt-0 vtext' style={{width: '50px'}}><i className='py-2 icon fa fa-cogs' style={{transform: 'rotate(90deg)'}}/>COMPONENTS</Collapsible.Title>
			<Collapsible.Content style={{width: '250px'}}>
				
			</Collapsible.Content>
		</Collapsible>
	);
}

export default ComponentsMenu;

