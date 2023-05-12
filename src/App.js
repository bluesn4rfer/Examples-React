import { useLocalStorage } from './components/Hooks/useLocalStorage';
import { connect } from 'react-redux';
import { useState } from 'react';

import DisplayMenu from './components/Menus/Controller';
import ThemeSelector from './components/Themes/Selector';
import Theme from './components/Themes/Controller';
import ComponentsMenu from './ComponentsMenu';
import ComponentExample from './ComponentExample';
//import ComponentCode from './ComponentCode';
//import Resizable from './components/Resizable/Controller';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './style.css';

const mapStateToProps = state => ({
	appState: state,
});
  
const mapDispatchToProps = dispatch => ({
	// increment: () => dispatch({ type: 'INCREMENT' }),
	// decrement: () => dispatch({ type: 'DECREMENT' }),
	updatePage: (page) => dispatch({ type: 'UPDATE_STATE', component: 'App', payload: {page: page} })
});

function App({appState, ...props}) {
	const [theme, setTheme] = useLocalStorage("theme","blue");
	const [showThemeSelector, setShowThemeSelector] = useState(false);

	const menuData = {
		class: 'list-unstyled',
		items: [
			{
				label: '',
				icon: 'fa-bars',
				class: 'dropdown-toggle btn btn btn-lg btn-secondary my-0',
				toggle: 'dropdown',
				menu: {
					class: 'dropdown-menu  theme-secondary border-0 p-0 m-0',
					items: [
						{
							id: 'ShowThemeSelector',
							label: 'Change Theme',
							class: 'btn btn-lg btn-secondary my-0',
						}
					]
				} 
			}
		]
	};

	const handleMenuClick = (menuItem) => {
		console.log('handleMenuClick() menuItem = '+JSON.stringify(menuItem));
		if(!menuItem.href){
			switch(menuItem.id){
				case 'ShowThemeSelector':
					setShowThemeSelector(true);
					break;
				case menuItem.id:
					props.updatePage(menuItem.id);
					break;
				default:
					return null;			
			}
		}
	}

	return (
		<>
			<Theme theme={theme} />
			<div className='position-fixed top-0 start-0 container-fluid theme-primary shadow-sm d-flex flex-row m-0 p-0' style={{zIndex:200, height: '55px'}}>
				<div className='d-flex flex-fill justify-content-start align-self-center ps-3'>Examples.BlueGunn.com</div>
				<div className='d-flex flex-fill justify-content-end align-self-center pe-0'><DisplayMenu menuData={menuData} callback={handleMenuClick} /></div>
			</div>
			<div className='container-fluid theme-secondary d-flex flex-row m-0 p-0 position-absolute' style={{zIndex: 100, top: '60px', bottom: '45px'}}>
				<div className='h-100 overflow-hidden'><ComponentsMenu callback={handleMenuClick} /></div>
				<div className='h-100 d-flex flex-fill justify-content-center align-items-center'><ComponentExample /></div>
				<div className='h-100 overflow-hidden'>{/*<ComponentCode />*/}</div>
			</div>
			<div className='position-absolute bottom-0 start-0 container-fluid border-top border-primary border-4 d-flex flex-row m-0 p-0' style={{height: '40px'}}>
				<div className='d-flex flex-fill justify-content-center align-self-center ps-3'>&copy; BlueGunn.com</div>
			</div>
			<ThemeSelector show={showThemeSelector} setShow={setShowThemeSelector} setTheme={setTheme} />
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
