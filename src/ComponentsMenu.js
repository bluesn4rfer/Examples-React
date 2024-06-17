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
						link: (<Link to="/examples/Bootstrap/DropDown" className='d-block py-1 px-2 btn-secondary text-decoration-none'>Drop down</Link>)
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to='/examples/Bootstrap/Navbar' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Navbar</Link>)
					},						
					{
						link: (<Link to='/examples/Bootstrap/Nav' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Nav</Link>)
					},
					{
						link: (<Link to='/examples/Bootstrap/ItemVariants' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Item Variants</Link>)
					},
					{
						link: (<Link to='/examples/Bootstrap/Tabs' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Tabs</Link>)
					},
					{
						link: (<Link to='/examples/Bootstrap/Pagination' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Pagination</Link>)
					},
					{
						link: (<Link to='/examples/Bootstrap/Breadcrumbs' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Breadcrumbs</Link>)
					},
					{
						link: (<Link to='/examples/Bootstrap/Sidebar' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Sidebar</Link>)
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
						link: (<Link to='/examples/DisplayMenu/Accordion' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Accordion</Link>)
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to="/examples/DisplayMenu/DropDown" className='d-block py-1 px-2 btn-secondary text-decoration-none'>Drop down</Link>)
					},
					{
						link: (<Link to='/examples/DisplayMenu/Tabs' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Tabs</Link>)
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
						link: (<Link to="/examples/Collapsible/Collapsible" className='d-block py-1 px-2 btn-secondary text-decoration-none'>Collapsible</Link>)
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to="/examples/Json2Html/FormTest" className='d-block py-1 px-2 btn-secondary text-decoration-none'>Json2Html</Link>)
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to="/examples/DataGrid/Demo" className='d-block py-1 px-2 btn-secondary text-decoration-none'>Data Grid</Link>)
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to="/examples/Calendar/Demo" className='d-block py-1 px-2 btn-secondary text-decoration-none'>Calendar</Link>)
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to="/examples/Charts/Demo" className='d-block py-1 px-2 btn-secondary text-decoration-none'>Charts</Link>)
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
						link: (<Link to='/examples/DisplayForm/AllTypes' className='d-block py-1 px-2 btn-secondary text-decoration-none'>All Field Types</Link>)
					},
					{ 
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to='/examples/DisplayForm/ContactUs' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Contact Us</Link>)
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to='/examples/DisplayForm/Login' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Login</Link>)
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to='/examples/DisplayForm/Registration' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Registration</Link>)
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to='/examples/DisplayForm/Survey' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Survey</Link>)
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to='/examples/DisplayForm/Newsletter' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Newsletter Sign-up</Link>)
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to='/examples/DisplayForm/Payment' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Payment</Link>)
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to='/examples/DisplayForm/FileUpload' className='d-block py-1 px-2 btn-secondary text-decoration-none'>File Upload</Link>)
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to='/examples/DisplayForm/Feedback' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Feedback</Link>)
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to='/examples/DisplayForm/Comment' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Comment</Link>)
					},
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to='/examples/DisplayForm/RSVP' className='d-block py-1 px-2 btn-secondary text-decoration-none'>RSVP</Link>)
					},						
					{
						style: {
							borderBottom: '2px solid var(--bs-secondary-hover)'
						},
						link: (<Link to='/examples/DisplayForm/PasswordReset' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Password Reset</Link>)
					},
					{
						link: (<Link to='/examples/DisplayForm/SubscriptionCancellation' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Subscription Cancellation</Link>)
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
						link: (<Link to="/icons/FontAwesome" className='d-block py-1 px-2 btn-secondary text-decoration-none'>Font Awesome</Link>)
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

