import { useLocalStorage } from './components/hooks/useLocalStorage';
import { useState } from 'react';
import Menu from './components/Menu.js';
import ThemeSelector from './components/ThemeSelector';
import Theme from './components/Theme';
import ComponentMenu from './ComponentMenu';
import ComponentExample from './ComponentExample';
import ComponentCode from './ComponentCode';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './style.css';

function App() {
	const [theme, setTheme] = useLocalStorage("theme","blue");
	const [showThemeSelector, setShowThemeSelector] = useState(false);

	return (
		<>
			<Theme theme={theme} />
			<div className='position-fixed top-0 start-0 container-fluid theme-primary shadow-sm d-flex flex-row m-0 p-0' style={{zIndex:200, height: '55px'}}>
				<div className='d-flex flex-fill justify-content-start align-self-center ps-3'>BlueGunn.com Examples</div>
				<div className='d-flex flex-fill justify-content-end align-self-center pe-3'><Menu showThemeSelector={setShowThemeSelector} /></div>
			</div>
			<div className='container-fluid theme-secondary d-flex flex-row m-0 p-0 position-absolute' style={{zIndex: 100, top: '60px', bottom: '45px'}}>
				<div className='h-100 overflow-hidden'><ComponentMenu /></div>
				<div className='h-100 d-flex flex-fill justify-content-center align-items-center'><ComponentExample /></div>
				<div className='h-100 overflow-hidden'><ComponentCode /></div>
			</div>
			<div className='position-absolute bottom-0 start-0 container-fluid border-top border-primary border-4 d-flex flex-row m-0 p-0' style={{height: '40px'}}>
				<div className='d-flex flex-fill justify-content-center align-self-center ps-3'>&copy; BlueGunn.com</div>
			</div>
			<ThemeSelector show={showThemeSelector} setShow={setShowThemeSelector} setTheme={setTheme} />
		</>
  	);
}

export default App;
