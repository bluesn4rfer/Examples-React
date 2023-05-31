import { useLocalStorage } from './components/Hooks/useLocalStorage';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import DisplayMenu from './components/Menus/Controller';

import ComponentsMenu from './ComponentsMenu';
import ComponentPreview from './ComponentPreview';

import PageNotFound from './PageNotFound';
import FontAwesomeIcons from './FontAwesomeIcons';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// THEME NEEDS TO LOAD AFTER BOOTSTRAP
import ThemeSelector from './components/Themes/Selector';
import Theme from './components/Themes/Controller';
import './components/Themes/theme.css';

import 'font-awesome/css/font-awesome.css';

import './style.css';

const mapStateToProps = state => ({
	appState: state,
});
  
const mapDispatchToProps = dispatch => ({
	// increment: () => dispatch({ type: 'INCREMENT' }),
	// decrement: () => dispatch({ type: 'DECREMENT' }),
	//updatePage: (page) => dispatch({ type: 'UPDATE_STATE', component: 'App', payload: {page: page} })
});

function App({appState, ...props}) {
	const [theme, setTheme] = useLocalStorage("theme","blue");
	const [showThemeSelector, setShowThemeSelector] = useState(false);
	const [mode, setMode] = useState('preview');
	const [code, setCode] = useState(null);

	const topMenu = {
		className: 'list-unstyled',
		links: [
			{
				link: (<a className='dropdown-toggle fs-5 btn-secondary rounded-bottom px-3 py-2 my-0' data-bs-toggle="dropdown"><i className='icon fa fa-bars' /></a>),
				menu: {
					className: 'dropdown-menu theme-secondary border-0 p-0 m-0',
					links: [
						{
							link: (<a id='ShowThemeSelector' className='btn btn-lg btn-secondary my-0 w-100 text-start' onClick={() => setShowThemeSelector(true)}>Change Theme</a>)
						}
					]
				} 
			}
		]
	};

	const componentsMenu = {
		className: 'border-primary list-unstyled',
		style: { width: '250px' },
		links: [
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
							link: (<Link to='/examples/menus/Accordion' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Accordion</Link>)
						},
						{
							style: {
								borderBottom: '2px solid var(--bs-secondary-hover)'
							},
							link: (<Link to="/examples/menus/DropDown" className='d-block py-1 px-2 btn-secondary text-decoration-none'>Drop down</Link>)
						},
						{
							link: (<Link to='/examples/menus/Tabs' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Tabs</Link>)
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
							link: (<Link to="/examples/views/Collapsible" className='d-block py-1 px-2 btn-secondary text-decoration-none'>Collapsible</Link>)
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
							link: (<Link to='/examples/forms/ContactUs' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Contact Us</Link>)
						},
						{
							style: {
								borderBottom: '2px solid var(--bs-secondary-hover)'
							},
							link: (<Link to='/examples/forms/Login' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Login</Link>)
						},
						{
							style: {
								borderBottom: '2px solid var(--bs-secondary-hover)'
							},
							link: (<Link to='/examples/forms/Registration' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Registration</Link>)
						},
						{
							style: {
								borderBottom: '2px solid var(--bs-secondary-hover)'
							},
							link: (<Link to='/examples/forms/Survey' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Survey</Link>)
						},
						{
							style: {
								borderBottom: '2px solid var(--bs-secondary-hover)'
							},
							link: (<Link to='/examples/forms/Newsletter' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Newsletter Sign-up</Link>)
						},
						{
							style: {
								borderBottom: '2px solid var(--bs-secondary-hover)'
							},
							link: (<Link to='/examples/forms/Payment' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Payment</Link>)
						},
						{
							style: {
								borderBottom: '2px solid var(--bs-secondary-hover)'
							},
							link: (<Link to='/examples/formsFileUpload' className='d-block py-1 px-2 btn-secondary text-decoration-none'>File Upload</Link>)
						},
						{
							style: {
								borderBottom: '2px solid var(--bs-secondary-hover)'
							},
							link: (<Link to='/examples/forms/Feedback' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Feedback</Link>)
						},
						{
							style: {
								borderBottom: '2px solid var(--bs-secondary-hover)'
							},
							link: (<Link to='/examples/forms/Comment' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Comment</Link>)
						},
						{
							style: {
								borderBottom: '2px solid var(--bs-secondary-hover)'
							},
							link: (<Link to='/examples/forms/RSVP' className='d-block py-1 px-2 btn-secondary text-decoration-none'>RSVP</Link>)
						},						
						{
							style: {
								borderBottom: '2px solid var(--bs-secondary-hover)'
							},
							link: (<Link to='/examples/forms/PasswordReset' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Password Reset</Link>)
						},
						{
							link: (<Link to='/examples/forms/SubscriptionCancellation' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Subscription Cancellation</Link>)
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

	const handleCodeChange = (value) => {
		console.log('App.js handleCodeChange() invoked');
		setCode(value);
	}

	return (
		<>
		<Theme theme={theme} />
		<div className='container-fluid position-fixed top-0 start-0 end-0 theme-primary shadow-sm d-flex flex-row m-0 p-0' style={{ zIndex: 200, height: '55px' }}>
			<div className='d-flex flex-fill justify-content-start align-self-center ps-1 ps-md-3'><h2 className='m-0'>Examples.BlueGunn.com</h2></div>
			<div className='d-flex flex-fill justify-content-end align-self-center pe-1 pe-md-3'><DisplayMenu menu={topMenu} /></div>
		</div>
		<div className='d-flex flex-shrink-1 position-fixed left-0 py-1 overflow-hidden' style={{ zIndex: 150, marginTop: '55px', height: 'calc(100vh - 95px)' }}><ComponentsMenu menuData={componentsMenu} /></div>
		<div className='container-fluid position-absolute top-0 start-0 end-0 d-flex p-0 overflow-auto' style={{ zIndex: 100, marginTop: '55px', marginBottom: '40px', paddingLeft: '65px', minHeight: 'calc(100vh - 95px)' }}>
			<div className='d-flex w-100 h-100 pt-1' style={{marginLeft: '60px'}}>
			<Routes>
				<Route path="/" element={<ComponentPreview key='welcome' component='DisplayForm' mode={mode} code={code} file='/examples/Forms/Login.js' setCode={setCode} doc='/docs/DisplayMenu.md' />} />
				<Route path="/examples/menus/Accordion" element={<ComponentPreview key='menuAccordion' component='DisplayMenu' mode={mode} code={code} file='/examples/Menus/Accordion.js' setCode={setCode} doc='/docs/DisplayMenu.md' />} />
				<Route path="/examples/menus/DropDown" element={<ComponentPreview key='menuDropdown' component='DisplayMenu' mode={mode} code={code} file='/examples/Menus/DropDown.js' setCode={setCode} doc='/docs/DisplayMenu.md' />} />
				<Route path="/examples/menus/Tabs" element={<ComponentPreview key='menuTabs' component='DisplayMenu' mode={mode} code={code} file='/examples/Menus/Tabs.js' setCode={setCode} doc='/docs/DisplayMenu.md' />} />
				<Route path="/examples/views/Collapsible" element={<ComponentPreview key='menuCollapsible' component='Collapsible' mode={mode} code={code} file='/examples/Views/Collapsible.js' setCode={setCode} doc='/docs/Collapsible.md' />} />
				<Route path="/examples/forms/ContactUs" element={<ComponentPreview key='formContactUs' component='DisplayForm' mode={mode} code={code} file='/examples/Forms/ContactUs.js' setCode={setCode} doc='/docs/DisplayForm.md' />} />
				<Route path="/examples/forms/Login" element={<ComponentPreview key='formLogin' component='DisplayForm' mode={mode} code={code} file='/examples/Forms/Login.js' setCode={setCode} doc='/docs/DisplayForm.md' />} />
				<Route path="/examples/forms/Registration" element={<ComponentPreview key='formRegistration' component='DisplayForm' mode={mode} code={code} file='/examples/Forms/Registration.js' setCode={setCode} doc='/docs/DisplayForm.md' />} />
				<Route path="/examples/forms/Survey" element={<ComponentPreview key='formSurvey' component='DisplayForm' mode={mode} code={code} file='/examples/Forms/Survey.js' setCode={setCode} doc='/docs/DisplayForm.md' />} />
				<Route path="/examples/forms/Newsletter" element={<ComponentPreview key='formNewsletter' component='DisplayForm' mode={mode} code={code} file='/examples/Forms/Newsletter.js' setCode={setCode} doc='/docs/DisplayForm.md' />} />
				<Route path="/examples/forms/Payment" element={<ComponentPreview key='formPayment' component='DisplayForm' mode={mode} code={code} file='/examples/Forms/Payment.js' setCode={setCode} doc='/docs/DisplayForm.md' />} />
				<Route path="/examples/formsFileUpload" element={<ComponentPreview key='formFileUpload' component='DisplayForm' mode={mode} code={code} file='/examples/Forms/FileUpload.js' setCode={setCode} doc='/docs/DisplayForm.md' />} />
				<Route path="/examples/forms/Feedback" element={<ComponentPreview key='formFeedback' component='DisplayForm' mode={mode} code={code} file='/examples/Forms/Feedback.js' setCode={setCode} doc='/docs/DisplayForm.md' />} />
				<Route path="/examples/forms/Comment" element={<ComponentPreview key='formComment' component='DisplayForm' mode={mode} code={code} file='/examples/Forms/Comment.js' setCode={setCode} doc='/docs/DisplayForm.md' />} />
				<Route path="/examples/forms/RSVP" element={<ComponentPreview key='formRSVP' component='DisplayForm' mode={mode} code={code} file='/examples/Forms/RSVP.js' setCode={setCode} doc='/docs/DisplayForm.md' />} />
				<Route path="/examples/forms/PasswordReset" element={<ComponentPreview key='formPasswordReset' component='DisplayForm' mode={mode} code={code} file='/examples/Forms/PasswordReset.js' setCode={setCode} doc='/docs/DisplayForm.md' />} />
				<Route path="/examples/forms/SubscriptionCancellation" element={<ComponentPreview key='formSubscriptionCancellation' component='DisplayForm' mode={mode} code={code} file='/examples/Forms/SubscriptionCancellation.js' setCode={setCode} doc='/docs/DisplayForm.md' />} />
				<Route path="/icons/FontAwesome" element={<FontAwesomeIcons />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			</div>
		</div>
		<div className='container-fluid position-fixed bottom-0 start-0 end-0 theme-secondary border-top border-primary border-4 d-flex flex-row m-0 p-0' style={{ zIndex: 200, height: '40px' }}>
			<div className='d-flex flex-fill justify-content-center align-self-center ps-3'>&copy; BlueGunn.com</div>
		</div>
		<ThemeSelector show={showThemeSelector} setShow={setShowThemeSelector} setTheme={setTheme} />
		<button id="installButton" style={{ display: 'none' }}>Install</button>
		</>
  	);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
