import { useRef, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Container, Row, Col, Form, Button, Dropdown, DropdownButton, Navbar, Nav, NavDropdown, Tabs, Tab, Pagination, Breadcrumb } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, necessary for styling
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import CodeEditor from '../CodeEditor/Controller';
import CodePreview from '../CodePreview/Controller';
import MarkdownPreview from '../MarkdownPreview/Controller';

import DisplayForm from '../Forms/Controller';
//import Calendar from '../Calendar/Controller';

import Charts from '../Charts/Controller';
import Json2Html from '../Json2Html/Controller';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './preview.css';

function ComponentPreview() {
	const componentMap = {
		useRef, useEffect, useState, // react
		Container, Row, Col, Form, Button, Dropdown, DropdownButton, Navbar, Nav, NavDropdown, Tabs, Tab, Pagination, Breadcrumb, // bootstrap
		Calendar, momentLocalizer, // react-big-calendar
		moment,
		DatePicker, // react-datepicker
		AgGridReact, // ag-grid-react
		Charts,
		Json2Html,
		DisplayForm
	};

	const { mode = 'preview', component = 'DisplayForm', example = 'Login' } = useParams();
	const [file, setFile] = useState('/examples/'+component+'/'+example+'.js');
	const [doc, setDoc] = useState('/documentation/'+component+'.md');

	useEffect(() => {
		if(file !== '/examples/'+component+'/'+example+'.js'){
			setFile('/examples/'+component+'/'+example+'.js');
		}
		setDoc('/documentation/'+component+'.md');
	}, [file, component, example]);

	const [code, setCode] = useState(null);
	const [updateCode, setUpdateCode] = useState(null);
	const [markdown, setMarkdown] = useState(null);

	/* TOP TABS */
	const tabsMenu = {
		className: "d-flex m-0 list-unstyled",
		links: [
			{
				className: !mode || mode.toLowerCase() === 'preview' ? 'theme-primary rounded-top' : 'theme-secondary border-start border-top border-end border-1 border-primary rounded-top',
				link: (
					<Link
					to={`/examples/${component}/${example}/preview`}
					className="d-block px-3 text-decoration-none"
					>
					Preview
					</Link>
				)
			},
			{
				className: mode.toLowerCase() === 'editor' ? 'theme-primary rounded-top' : 'theme-secondary border-start border-top border-end border-1 border-primary rounded-top',
				link: (
					<Link
					to={`/examples/${component}/${example}/editor`}
					className="d-block px-3 text-decoration-none"
					>
					Editor
					</Link>
				)
			},
			{
				className: mode.toLowerCase() === 'documentation' ? 'theme-primary rounded-top' : 'theme-secondary border-start border-top border-end border-1 border-primary rounded-top',
				link: (
					<Link
					to={`/examples/${component}/${example}/documentation`}
					className="d-block px-3 text-decoration-none"
					>
					Documentation
					</Link>
				)
			}
		]
	};

	/* CODE EDITOR | PREVIEW */
	useEffect(() => {
		const fetchCode = () => {
			console.log('ComponentPreview.js fetchCode() file = '+file);
		  fetch(file)
			.then((response) => {
			  if (response.ok) {
				return response.text();
			  } else {
				throw new Error(`Failed to fetch code: ${response.status} ${response.statusText}`);
			  }
			})
			.then((code) => {
				console.log('ComponentPreview.js fetchCode updating code');
				setCode(code);
				setUpdateCode(code);
			})
			.catch((error) => {
			  console.error('Error fetching code:', error);
			  // Handle error condition if desired
			});
		};
	
		if (setCode && file) {
		  fetchCode();
		}
	}, [setCode, setUpdateCode, file]);

	const handleCodeChange = (code) => {
		console.log('ComponentPreview.js handleCodeChange() invoked');
		console.debug('ComponentPreview.js handleCodeChange() code = '+code);
		setCode(code);
	}

	/* DOCUMENATION */
	useEffect(() => {
		const fetchDoc = () => {
			console.log('ComponentPreview.js fetchDoc() file = '+doc);
		  fetch(doc)
			.then((response) => {
			  if (response.ok) {
				return response.text();
			  } else {
				throw new Error(`Failed to fetch documentation: ${response.status} ${response.statusText}`);
			  }
			})
			.then((markdown) => {
				console.log('ComponentPreview.js fetchDoc updating markdown');
				setMarkdown(markdown);
			})
			.catch((error) => {
			  console.error('Error fetching doc:', error);
			  // Handle error condition if desired
			});
		};
	
		if (doc) {
		  fetchDoc();
		}		
	}, [doc, setMarkdown]);

	console.log('ComponentPreview.js mode = '+mode.toLowerCase());
 	return (
		<div key={`${component}-${example}`} className='d-flex flex-column w-100'>
			<div className="d-flex flex-row w-100 justify-content-center border-3 border-bottom border-primary">
				{/*<DisplayMenu menu={tabsMenu} />*/}
			</div>

			<div className="w-100 h-100 px-3" style={
				{
					display: mode.toLowerCase() === '' || mode.toLowerCase() === 'preview' ? 'block' : 'none',
					animation: mode.toLowerCase() === "" || mode.toLowerCase() === "preview" ? "fade-in 0.5s ease-in-out" : ""
				}
			}>
      			<div><h2>Preview</h2></div>
				<CodePreview componentMap={componentMap} code={code} className='w-100' />
			</div>
			<CodeEditor code={code} onChange={handleCodeChange} updateCode={updateCode} className='w-100' style={
				{
					display: mode.toLowerCase() === 'editor' ? 'block' : 'none',
					animation: mode.toLowerCase() === "editor" ? "fade-in 0.5s ease-in-out" : ""
				}
			} />
			<MarkdownPreview markdown={markdown} style={
				{
					display: mode.toLowerCase() === 'documentation' ? 'block' : 'none',
					animation: mode.toLowerCase() === "documentation" ? "fade-in 0.5s ease-in-out" : ""
				}
			} />
		</div>
	);
}

export default ComponentPreview;

