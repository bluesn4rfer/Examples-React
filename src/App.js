import { useLocalStorage } from './components/Hooks/useLocalStorage';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import DisplayMenu from './components/Menus/Controller';
import DisplayForm from './components/Forms/Controller';

import ComponentsMenu from './ComponentsMenu';
import ComponentPreview from './ComponentPreview';
import CodePreview from './components/CodePreview/Controller';
import CodeEditor from './components/CodeEditor/Controller';

import PageNotFound from './PageNotFound';
import FontAwesomeIcons from './FontAwesomeIcons';

import ExampleFormContactUs from './components/Forms/examples/ContactUs';
import ExampleFormRegistration from './components/Forms/examples/Registration';
import ExampleFormLogin from './components/Forms/examples/Login';
import ExampleFormSurvey from './components/Forms/examples/Survey';
import ExampleFormNewsletter from './components/Forms/examples/Newsletter';
import ExampleFormPayment from './components/Forms/examples/Payment';
import ExampleFormFileUpload from './components/Forms/examples/FileUpload';
import ExampleFormFeedback from './components/Forms/examples/Feedback';
import ExampleFormComment from './components/Forms/examples/Comment';
import ExampleFormRSVP from './components/Forms/examples/RSVP';
import ExampleFormPasswordReset from './components/Forms/examples/PasswordReset';
import ExampleFormSubscriptionCancellation from './components/Forms/examples/SubscriptionCancellation';
import ExampleMenuDropDown from './components/Menus/examples/DropDown';
import ExampleMenuAccordion from './components/Menus/examples/Accordion';

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
	const [code, setCode] = useState(`function Test(){
		const handleClick = () => {
			console.log('Hello World');
			alert('Hello World');
		};

		return (
			<div>
			<h1>Hello World</h1>
			<button onClick={handleClick}>Hello World</button>
			</div>
		);
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
			className: 'border-primary list-unstyled'
		},
		links: [
			{
				link: (<a href='#menus-menu' className='d-block btn-primary list-unstyled collapsed text-decoration-none' data-bs-toggle="collapse" aria-expanded="true"><i className='p-2 icon fa fa-bars' />Menus</a>),			
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
				link: (<a href='#forms-menu' className='btn-primary d-block list-unstyled text-decoration-none' data-bs-toggle="collapse" aria-expanded="true"><i className='p-2 icon fa fa-pencil' />Forms</a>),
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
				link: (<a href='#icons-menu' className='d-block btn-primary list-unstyled collapsed text-decoration-none' data-bs-toggle="collapse" aria-expanded="true"><i className='p-2 icon fa fa-magic' />Icons</a>),			
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
			<div className='position-fixed top-0 start-0 container-fluid theme-primary shadow-sm d-flex flex-row m-0 p-0' style={{zIndex:200, height: '55px'}}>
				<div className='d-flex flex-fill justify-content-start align-self-center ps-1 ps-md-3'><h2>Examples.BlueGunn.com</h2></div>
				<div className='d-flex flex-fill justify-content-end align-self-center pe-1 pe-md-3'><DisplayMenu menuData={topMenu} /></div>
			</div>
			<div className='container-fluid d-flex flex-row m-0 p-0 position-absolute' style={{zIndex: 100, top: '60px', bottom: '45px'}}>
				<div className='h-100 overflow-hidden'><ComponentsMenu menuData={componentsMenu} /></div>
				<div className='h-100 overflow-auto position-relative d-flex flex-fill justify-content-center align-items-center'>
					<Routes>
						<Route path="/" element={<ExampleFormLogin />} />
						<Route path="/test" element={<><CodePreview componentName='DisplayForm' component={DisplayForm} code={code} />
							{/* <CodeEditor code={code} onChange={handleCodeChange} /> */}
							</>} />
						<Route path="/examples/forms/ContactUs" element={<ExampleFormContactUs />} />
						<Route path="/examples/forms/Login" element={<ExampleFormLogin />} />
						<Route path="/examples/forms/Registration" element={<ExampleFormRegistration />} />
						<Route path="/examples/forms/Survey" element={<ExampleFormSurvey />} />
						<Route path="/examples/forms/Newsletter" element={<ExampleFormNewsletter />} />
						<Route path="/examples/forms/Payment" element={<ExampleFormPayment />} />
						<Route path="/examples/formsFileUpload" element={<ExampleFormFileUpload />} />
						<Route path="/examples/forms/Feedback" element={<ExampleFormFeedback />} />
						<Route path="/examples/forms/Comment" element={<ExampleFormComment />} />
						<Route path="/examples/forms/RSVP" element={<ExampleFormRSVP />} />
						<Route path="/examples/forms/PasswordReset" element={<ExampleFormPasswordReset />} />
						<Route path="/examples/forms/SubscriptionCancellation" element={<ExampleFormSubscriptionCancellation />} />
						<Route path="/examples/menus/DropDown" element={<ExampleMenuDropDown />} />
						<Route path="/examples/menus/Accordion" element={<ExampleMenuAccordion />} />
						<Route path="/icons/FontAwesome" element={<FontAwesomeIcons />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>				
				</div>
				<div className='h-100 overflow-hidden'>{/*<ComponentCode />*/}</div>
			</div>
			<div className='position-absolute bottom-0 start-0 container-fluid border-top border-primary border-4 d-flex flex-row m-0 p-0' style={{height: '40px'}}>
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
