import { useLocalStorage } from './components/Hooks/useLocalStorage';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import DisplayMenu from './components/Menus/Controller';
// import DisplayForm from './components/Forms/Controller';

import ComponentsMenu from './ComponentsMenu';
import ComponentPreview from './ComponentPreview';
// import CodePreview from './components/CodePreview/Controller';
// import CodeEditor from './components/CodeEditor/Controller';

import PageNotFound from './PageNotFound';
import FontAwesomeIcons from './FontAwesomeIcons';

// import ExampleFormContactUs from './components/Forms/examples/ContactUs';
// import ExampleFormRegistration from './components/Forms/examples/Registration';
// import ExampleFormLogin from './components/Forms/examples/Login';
// import ExampleFormSurvey from './components/Forms/examples/Survey';
// import ExampleFormNewsletter from './components/Forms/examples/Newsletter';
// import ExampleFormPayment from './components/Forms/examples/Payment';
// import ExampleFormFileUpload from './components/Forms/examples/FileUpload';
// import ExampleFormFeedback from './components/Forms/examples/Feedback';
// import ExampleFormComment from './components/Forms/examples/Comment';
// import ExampleFormRSVP from './components/Forms/examples/RSVP';
// import ExampleFormPasswordReset from './components/Forms/examples/PasswordReset';
// import ExampleFormSubscriptionCancellation from './components/Forms/examples/SubscriptionCancellation';
// import ExampleMenuDropDown from './components/Menus/examples/DropDown';
// import ExampleMenuAccordion from './components/Menus/examples/Accordion';

//import ComponentCode from './ComponentCode';
//import Resizable from './components/Resizable/Controller';
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
	const [code, setCode] = useState(`function ExampleFormLogin() {
		let formData = {
			"steps": [
				{
					"title": "Login Form",
					"fields": [
						{
							"type": "text",
							"name": "username",
							"id": "username",
							"class": "form-control",
							"placeholder": "Enter your username",
							"required": true,
							"label": "Username"
						},
						{
							"type": "password",
							"name": "password",
							"id": "password",
							"class": "form-control",
							"placeholder": "Enter your password",
							"required": true,
							"label": "Password"
						}
					]
				}
			],
			"submit": {
			  "value": "Login",
			  "id": "login-button",
			  "class": "btn btn-primary"
			}
		  };
		  
	
		return <DisplayForm formData={formData}/>;
	}`);

	const topMenu = {
		props: {
			className: 'list-unstyled',
		},
		links: [
			{
				link: (<a className='dropdown-toggle fs-5 btn-secondary rounded-bottom px-3 py-2 my-0' data-bs-toggle="dropdown"><i className='icon fa fa-bars' /></a>),
				menu: {
					props: {
						className: 'dropdown-menu theme-secondary border-0 p-0 m-0'
					},
					links: [
						{
							link: (<a id='ShowThemeSelector' className='btn btn-lg btn-secondary my-0' onClick={() => setShowThemeSelector(true)}>Change Theme</a>)
						}
					]
				} 
			}
		]
	};

	const componentsMenu = {
		props: {
			className: 'border-primary list-unstyled',
			style: { width: '250px' }
		},
		links: [
			{
				link: (<a href='#menus-menu' className='d-block btn-primary list-unstyled collapsed text-decoration-none exclude-collapse' data-bs-toggle="collapse" aria-expanded="true"><i className='p-2 icon fa fa-bars' />Menus</a>),			
				menu: {
					props: {
						id: 'menus-menu',
						className: 'list-unstyled collapse show'
					},
					links: [
						{
							style: {
								borderBottom: '2px solid var(--bs-secondary-hover)'
							},
							link: (<Link to="/examples/menus/DropDown" className='d-block py-1 px-2 btn-secondary text-decoration-none'>Drop down</Link>)
						},
						{
							link: (<Link to='/examples/menus/Accordion' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Accordion</Link>)
						}
					]
				}
			},
			{
				link: (<a href='#views-menu' className='d-block btn-primary list-unstyled collapsed text-decoration-none exclude-collapse' data-bs-toggle="collapse" aria-expanded="true"><i className='p-2 icon fa fa-eye' />Views</a>),			
				menu: {
					props: {
						id: 'views-menu',
						className: 'list-unstyled collapse show'
					},
					links: [
						{
							style: {
								borderBottom: '2px solid var(--bs-secondary-hover)'
							},
							link: (<Link to="/examples/views/CollapsibleTop" className='d-block py-1 px-2 btn-secondary text-decoration-none'>Collapsible Top</Link>)
						},
						{
							style: {
								borderBottom: '2px solid var(--bs-secondary-hover)'
							},
							link: (<Link to='/examples/views/CollapsibleBottom' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Collapsible Bottom</Link>)
						},
						{
							style: {
								borderBottom: '2px solid var(--bs-secondary-hover)'
							},
							link: (<Link to="/examples/views/CollapsibleStart" className='d-block py-1 px-2 btn-secondary text-decoration-none'>Collapsible Start</Link>)
						},
						{
							link: (<Link to='/examples/views/CollapsibleEnd' className='d-block py-1 px-2 btn-secondary text-decoration-none'>Collapsible End</Link>)
						}						
					]
				}
			},			
			{
				link: (<a href='#forms-menu' className='btn-primary d-block list-unstyled text-decoration-none exclude-collapse' data-bs-toggle="collapse" aria-expanded="true"><i className='p-2 icon fa fa-pencil' />Forms</a>),
				menu: {
					props: {
						id: 'forms-menu',
						className: 'list-unstyled collapse show',
					},
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
					props: {
						id: 'icons-menu',
						className: 'list-unstyled collapse show'
					},
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
		<div className='container-fluid position-absolute top-0 start-0 end-0 theme-primary shadow-sm d-flex flex-row m-0 p-0' style={{ zIndex: 200, height: '55px' }}>
			<div className='d-flex flex-fill justify-content-start align-self-center ps-1 ps-md-3'><h2 className='m-0'>Examples.BlueGunn.com</h2></div>
			<div className='d-flex flex-fill justify-content-end align-self-center pe-1 pe-md-3'><DisplayMenu menuData={topMenu} /></div>
		</div>
		<div className='d-flex flex-shrink-1 position-absolute left-0 py-1 overflow-hidden' style={{ zIndex: 150, marginTop: '55px', height: 'calc(100vh - 95px)' }}><ComponentsMenu menuData={componentsMenu} /></div>
		<div className='container-fluid position-absolute top-0 start-0 end-0 d-flex justify-content-center align-items-center p-0 overflow-auto' style={{ zIndex: 100, marginTop: '55px', marginBottom: '40px', paddingLeft: '65px', minHeight: 'calc(100vh - 95px)' }}>
			<div className='position-absolute top-0 start-0 w-100' style={{paddingLeft: '75px'}}>
			<Routes>
				<Route path="/" element={<ComponentPreview component='DisplayForm' code={code} file='/examples/Forms/Login.js' setCode={setCode} />} />
				<Route path="/examples/menus/DropDown" element={<ComponentPreview component='DisplayMenu' code={code} file='/examples/Menus/DropDown.js' setCode={setCode} />} />
				<Route path="/examples/menus/Accordion" element={<ComponentPreview component='DisplayMenu' code={code} file='/examples/Menus/Accordion.js' setCode={setCode} />} />
				<Route path="/examples/views/CollapsibleTop" element={<ComponentPreview component='Collapsible' code={code} file='/examples/Views/CollapsibleTop.js' setCode={setCode} />} />
				<Route path="/examples/views/CollapsibleBottom" element={<ComponentPreview component='Collapsible' code={code} file='/examples/Views/CollapsibleBottom.js' setCode={setCode} />} />
				<Route path="/examples/views/CollapsibleStart" element={<ComponentPreview component='Collapsible' code={code} file='/examples/Views/CollapsibleStart.js' setCode={setCode} />} />
				<Route path="/examples/views/CollapsibleEnd" element={<ComponentPreview component='Collapsible' code={code} file='/examples/Views/CollapsibleEnd.js' setCode={setCode} />} />
				<Route path="/examples/forms/ContactUs" element={<ComponentPreview component='DisplayForm' code={code} file='/examples/Forms/ContactUs.js' setCode={setCode} />} />
				<Route path="/examples/forms/Login" element={<ComponentPreview component='DisplayForm' code={code} file='/examples/Forms/Login.js' setCode={setCode} />} />
				<Route path="/examples/forms/Registration" element={<ComponentPreview component='DisplayForm' code={code} file='/examples/Forms/Registration.js' setCode={setCode} />} />
				<Route path="/examples/forms/Survey" element={<ComponentPreview component='DisplayForm' code={code} file='/examples/Forms/Survey.js' setCode={setCode} />} />
				<Route path="/examples/forms/Newsletter" element={<ComponentPreview component='DisplayForm' code={code} file='/examples/Forms/Newsletter.js' setCode={setCode} />} />
				<Route path="/examples/forms/Payment" element={<ComponentPreview component='DisplayForm' code={code} file='/examples/Forms/Payment.js' setCode={setCode} />} />
				<Route path="/examples/formsFileUpload" element={<ComponentPreview component='DisplayForm' code={code} file='/examples/Forms/FileUpload.js' setCode={setCode} />} />
				<Route path="/examples/forms/Feedback" element={<ComponentPreview component='DisplayForm' code={code} file='/examples/Forms/Feedback.js' setCode={setCode} />} />
				<Route path="/examples/forms/Comment" element={<ComponentPreview component='DisplayForm' code={code} file='/examples/Forms/Comment.js' setCode={setCode} />} />
				<Route path="/examples/forms/RSVP" element={<ComponentPreview component='DisplayForm' code={code} file='/examples/Forms/RSVP.js' setCode={setCode} />} />
				<Route path="/examples/forms/PasswordReset" element={<ComponentPreview component='DisplayForm' code={code} file='/examples/Forms/PasswordReset.js' setCode={setCode} />} />
				<Route path="/examples/forms/SubscriptionCancellation" element={<ComponentPreview component='DisplayForm' code={code} file='/examples/Forms/SubscriptionCancellation.js' setCode={setCode} />} />
				<Route path="/icons/FontAwesome" element={<FontAwesomeIcons />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
			</div>
		</div>
		<div className='container-fluid position-absolute bottom-0 start-0 end-0 theme-secondary border-top border-primary border-4 d-flex flex-row m-0 p-0' style={{ zIndex: 200, height: '40px' }}>
			<div className='d-flex flex-fill justify-content-center align-self-center ps-3'>&copy; BlueGunn.com</div>
		</div>
		<ThemeSelector show={showThemeSelector} setShow={setShowThemeSelector} setTheme={setTheme} />
		<button id="installButton" style={{ display: 'none' }}>Install</button>
		</>
  	);

	//   const handleResize = (newWidth, newHeight) => {
	// 	console.log(`New width: ${newWidth}, new height: ${newHeight}`);
	//   };	  

	//   return (
	// 	<div className="container mt-3">
	// 	  <Resizable onResize={handleResize}>
	// 		<div className="flex-grow-1 text-white p-3">
	// 		  <h1>Resizable Panel</h1>
	// 		  <p>Drag the borders to resize me!</p>
	// 		</div>
	// 	  </Resizable>
	// 	</div>
	//   );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
