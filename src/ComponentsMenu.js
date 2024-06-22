import React from 'react';
import Collapsible from './components/Collapsible/Controller';
import DisplayMenu from './components/Menus/Controller';

const createLink = (props) => ({ ...props });

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
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: "/examples/Bootstrap/DropDown",
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Drop down')
					}),
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/Bootstrap/Navbar',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Navbar')
					}),						
					createLink({
						href: '/examples/Bootstrap/Nav',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Nav')
					}),
					createLink({
						href: '/examples/Bootstrap/ItemVariants',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Item Variants')
					}),
					createLink({
						href: '/examples/Bootstrap/Tabs',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Tabs')
					}),
					createLink({
						href: '/examples/Bootstrap/Pagination',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Pagination')
					}),
					createLink({
						href: '/examples/Bootstrap/Breadcrumbs',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Breadcrumbs')
					}),
					createLink({
						href: '/examples/Bootstrap/Sidebar',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Sidebar')
					})												
				]
			}
		},			
		{
			link: (<a href='#menus-menu' className='d-block btn-primary list-unstyled collapsed text-decoration-none exclude-collapse' data-bs-toggle="collapse" aria-expanded="true"><i className='p-2 icon fa fa-bars' />Menus</a>),			
			menu: {
				id: 'menus-menu',
				className: 'list-unstyled collapse show',
				links: [
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayMenu/Accordion',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Accordion')
					}),
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: "/examples/DisplayMenu/DropDown",
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Drop down')
					}),
					createLink({
						href: '/examples/DisplayMenu/Tabs',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Tabs')
					})
				]
			}
		},
		{
			link: (<a href='#views-menu' className='d-block btn-primary list-unstyled collapsed text-decoration-none exclude-collapse' data-bs-toggle="collapse" aria-expanded="true"><i className='p-2 icon fa fa-eye' />Views</a>),			
			menu: {
				id: 'views-menu',
				className: 'list-unstyled collapse show',
				links: [
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: "/examples/Collapsible/Collapsible",
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Collapsible')
					}),
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: "/examples/Json2Html/FormTest",
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Json2Html')
					}),
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: "/examples/DataGrid/Demo",
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Data Grid')
					}),
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: "/examples/Calendar/Demo",
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Calendar')
					}),
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: "/examples/Charts/Demo",
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Charts')
					})											
				]
			}
		},			
		{
			link: (<a href='#forms-menu' className='btn-primary d-block list-unstyled text-decoration-none exclude-collapse' data-bs-toggle="collapse" aria-expanded="true"><i className='p-2 icon fa fa-pencil' />Forms</a>),
			menu: {
				id: 'forms-menu',
				className: 'list-unstyled collapse show',
				links: [
					createLink({ 
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/AllTypes',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('All Field Types')
					}),
					createLink({ 
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/ContactUs',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Contact Us')
					}),
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/Login',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Login')
					}),
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/Registration',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Registration')
					}),
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/Survey',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Survey')
					}),
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/Newsletter',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Newsletter Sign-up')
					}),
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/Payment',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Payment')
					}),
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/FileUpload',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('File Upload')
					}),
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/Feedback',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Feedback')
					}),
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/Comment',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Comment')
					}),
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/RSVP',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('RSVP')
					}),						
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: '/examples/DisplayForm/PasswordReset',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Password Reset')
					}),
					createLink({
						href: '/examples/DisplayForm/SubscriptionCancellation',
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Subscription Cancellation')
					})
				]
			} 
		},
		{
			link: (<a href='#icons-menu' className='d-block btn-primary list-unstyled collapsed text-decoration-none exclude-collapse' data-bs-toggle="collapse" aria-expanded="true"><i className='p-2 icon fa fa-magic' />Icons</a>),			
			menu: {
				id: 'icons-menu',
				className: 'list-unstyled collapse show',
				links: [
					createLink({
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						href: "/icons/FontAwesome",
						className: 'd-block py-1 px-2 btn-secondary text-decoration-none',
						children: ('Font Awesome')
					})
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

