import { useLocalStorage } from './components/Hooks/useLocalStorage';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// MENUS
import TopMenu from './components/TopMenu/TopMenu';
import SideMenu from './components/SideMenu/SideMenu';

// PAGES
import ComponentPreview from './components/ComponentPreview/ComponentPreview';
import Page from './components/Pages/Controller';
import PageNotFound from './PageNotFound';
import FontAwesomeIcons from './FontAwesomeIcons';

// BOOTSTRAP
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// MATERIAL UI THEMES
import { ThemeProvider, CssBaseline } from '@mui/material';
import ThemeVariablesProvider from './components/ThemeVariablesProvider/ThemeVariablesProvider';
import ThemeSelector from './components/ThemeSelector/ThemeSelector';
import themes from './Themes';

import 'font-awesome/css/font-awesome.css';

import './style.css';

export default function App({...props}) {
	const [themeName, setTheme] = useLocalStorage("theme","blue");
	const [showThemeSelector, setShowThemeSelector] = useState(false);

	// Find the theme by name
	const theme = themes.find(t => t.name === themeName) || themes.find(t => t.name === "blue");

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<ThemeVariablesProvider />
			<div className='container-fluid position-fixed top-0 start-0 end-0 shadow-sm d-flex flex-row m-0 p-0' 
				style={{ 
					zIndex: 200, 
					height: '55px',
					backgroundColor: theme.palette.primary.main,
					color: theme.palette.primary.contrastText,
					borderBottom: `4px solid ${theme.palette.secondary.main}`
				}}
			>
				<div className='d-flex flex-fill justify-content-start align-self-center ps-1 ps-md-3'>
					<Link to='/' className='text-decoration-none'
						style={{
							color: theme.palette.primary.contrastText
						}}
					>
						<h2 className='m-0'>Examples.BlueGunn.com</h2>
					</Link>
				</div>
				<div className='d-flex flex-fill justify-content-end align-self-center pe-1 pe-md-3'><TopMenu setShowThemeSelector={setShowThemeSelector} /></div>
			</div>
			<div className='d-flex flex-shrink-1 position-fixed left-0 py-1' style={{ zIndex: 150, marginTop: '55px', height: 'calc(100vh - 95px)' }}><SideMenu /></div>
			<div className='container-fluid position-absolute top-0 start-0 end-0 d-flex p-0 overflow-auto' style={{ zIndex: 100, marginTop: '55px', marginBottom: '40px', paddingLeft: '65px', minHeight: 'calc(100vh - 95px)' }}>
				<div className='d-flex w-100 h-100 pt-1' style={{marginLeft: '60px', marginBottom: '40px'}}>
				<Routes>
					<Route path="/" element={<ComponentPreview key='welcome' />} />
					<Route path="/examples/:component/:example/:mode?" element={<ComponentPreview />} />
					<Route path="/icons/FontAwesome" element={<FontAwesomeIcons />} />
					<Route path="/page/:page" element={<Page />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
				</div>
			</div>
			<div className='container-fluid position-fixed bottom-0 start-0 end-0 d-flex flex-row m-0 p-0' 
				style={{ 
					zIndex: 200, height: '40px',
					backgroundColor: theme.palette.secondary.main,
					color: theme.palette.secondary.contrastText,
					border: '0px',
					borderTop: `4px solid ${theme.palette.primary.main}`
				}}>
				<div className='d-flex flex-fill justify-content-center align-self-center ps-3'>
					<Link to='/' className='text-decoration-none'
						style={{
							color: theme.palette.secondary.contrastText
						}}
					>&copy; BlueGunn.com
					</Link>
				</div>
			</div>		
		<ThemeSelector show={showThemeSelector} setShow={setShowThemeSelector} setTheme={setTheme} />
		<button id="installButton" style={{ display: 'none' }}>Install</button>
		</ThemeProvider>
  	);
}

