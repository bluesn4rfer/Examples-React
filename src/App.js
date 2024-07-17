import { useLocalStorage } from './components/Hooks/useLocalStorage';
import { connect } from 'react-redux';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// MENUS
import TopMenu from './components/TopMenu/Controller';
import SideMenu from './components/SideMenu/Controller';

import Preview from './components/Preview/Controller';
import Page from './components/Pages/Controller';
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

	return (
		<>
		<Theme theme={theme} />
		<div className='container-fluid position-fixed top-0 start-0 end-0 theme-primary shadow-sm d-flex flex-row m-0 p-0' style={{ zIndex: 200, height: '55px' }}>
			<div className='d-flex flex-fill justify-content-start align-self-center ps-1 ps-md-3'><h2 className='m-0'>Examples.BlueGunn.com</h2></div>
			<div className='d-flex flex-fill justify-content-end align-self-center pe-1 pe-md-3'><TopMenu setShowThemeSelector={setShowThemeSelector} /></div>
		</div>
		<div className='d-flex flex-shrink-1 position-fixed left-0 py-1' style={{ zIndex: 150, marginTop: '55px', height: 'calc(100vh - 95px)' }}><SideMenu /></div>
		<div className='container-fluid position-absolute top-0 start-0 end-0 d-flex p-0 overflow-auto' style={{ zIndex: 100, marginTop: '55px', marginBottom: '40px', paddingLeft: '65px', minHeight: 'calc(100vh - 95px)' }}>
			<div className='d-flex w-100 h-100 pt-1' style={{marginLeft: '60px', marginBottom: '40px'}}>
			<Routes>
				<Route path="/" element={<Preview key='welcome' />} />
				<Route path="/examples/:component/:example/:mode?" element={<Preview />} />
				<Route path="/icons/FontAwesome" element={<FontAwesomeIcons />} />
				<Route path="/page/:page" element={<Page />} />
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
