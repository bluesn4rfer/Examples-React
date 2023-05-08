import { useLocalStorage } from './components/Hooks/useLocalStorage';
import { useState } from 'react';
import DisplayMenu from './components/Menus/Controller';
import ThemeSelector from './components/Themes/Selector';
import Theme from './components/Themes/Controller';
import ComponentsMenu from './ComponentsMenu';
import ComponentExample from './ComponentExample';
import ComponentCode from './ComponentCode';
import Resizable from './components/Resizable/Controller';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './style.css';

function App() {
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
							label: 'Change Theme',
							class: 'btn btn-lg btn-secondary my-0',
							callback: {
								action: "setShowThemeSelector", 
								params: true
							}
						}
					]
				} 
			}
		]
	};

	const handleMenuCallback = (action, ...params) => {
		switch(action){
			case 'setShowThemeSelector':
				console.log('App.js: handleMenuCallback() setShowThemeSelector params = '+JSON.stringify(...params));
				setShowThemeSelector(...params);
				break;
			default:
				return null;
		}
	}

	return (
		<>
			<Theme theme={theme} />
			<div className='position-fixed top-0 start-0 container-fluid theme-primary shadow-sm d-flex flex-row m-0 p-0' style={{zIndex:200, height: '55px'}}>
				<div className='d-flex flex-fill justify-content-start align-self-center ps-3'>BlueGunn.com Examples</div>
				<div className='d-flex flex-fill justify-content-end align-self-center pe-0'><DisplayMenu menuData={menuData} callback={handleMenuCallback} /></div>
			</div>
			<div className='container-fluid theme-secondary d-flex flex-row m-0 p-0 position-absolute' style={{zIndex: 100, top: '60px', bottom: '45px'}}>
				<div className='h-100 overflow-hidden'><ComponentsMenu /></div>
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

export default App;
