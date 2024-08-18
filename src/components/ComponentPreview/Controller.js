import { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Dropdown, DropdownButton, Navbar, Nav, NavDropdown, Tabs, Tab, Pagination, Breadcrumb } from 'react-bootstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, necessary for styling
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

import CodeEditor from '../CodeEditor/Controller';
import CodePreview from '../CodePreview/Controller';
import MarkdownPreview from '../MarkdownPreview/Controller';

import DisplayForm from '../Forms/Controller';
import Charts from '../Charts/Controller';
import Json2Html from '../Json2Html/Controller';

import { useTheme } from '@mui/material/styles';

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

	const theme = useTheme();

	const { mode = 'preview', component = 'DisplayForm', example = 'Login' } = useParams();
	const [file, setFile] = useState(`/examples/${component}/${example}.js`);
	const [doc, setDoc] = useState(`/documentation/${component}.md`);
	const [activeTab, setActiveTab] = useState(mode);

	useEffect(() => {
		if (file !== `/examples/${component}/${example}.js`) {
			setFile(`/examples/${component}/${example}.js`);
		}
		setDoc(`/documentation/${component}.md`);
	}, [file, component, example]);

	const [code, setCode] = useState(null);
	const [updateCode, setUpdateCode] = useState(null);
	const [markdown, setMarkdown] = useState(null);

	useEffect(() => {
		const fetchCode = () => {
			console.log('ComponentPreview.js fetchCode() file = ' + file);
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
				});
		};

		if (setCode && file) {
			fetchCode();
		}
	}, [setCode, setUpdateCode, file]);

	const handleCodeChange = (code) => {
		console.log('ComponentPreview.js handleCodeChange() invoked');
		console.debug('ComponentPreview.js handleCodeChange() code = ' + code);
		setCode(code);
	};

	useEffect(() => {
		const fetchDoc = () => {
			console.log('ComponentPreview.js fetchDoc() file = ' + doc);
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
				});
		};

		if (doc) {
			fetchDoc();
		}
	}, [doc, setMarkdown]);

	useEffect(() => {
		setActiveTab(mode);
	}, [mode]);

	const handleSelect = (key) => {
		setActiveTab(key);
	};

	console.log('ComponentPreview.js mode = ' + activeTab);
    return (
        <Container className='d-flex flex-column align-items-center'>
            <Row className="w-100 justify-content-center">
                <Col xs={12} md={8} lg={6} className="w-100 text-center">
                    <Tabs
                        activeKey={activeTab}
                        onSelect={handleSelect}
                        id="controlled-tab-example"
                        className="mb-3 w-100 justify-content-center"
                        style={{ 
							borderBottom: `2px solid ${theme.palette.primary.main}` 
						}}
                    >
                        <Tab eventKey="preview" title="Preview"></Tab>
                        <Tab eventKey="editor" title="Editor"></Tab>
                        <Tab eventKey="documentation" title="Documentation"></Tab>
                    </Tabs>
                </Col>
            </Row>
            <Row className="w-100">
                <Col>
                    <div className="w-100 h-100 px-3" style={{ display: activeTab === 'preview' ? 'block' : 'none', animation: activeTab === "preview" ? "fade-in 0.5s ease-in-out" : "" }}>
                        <h2>Preview</h2>
                        <CodePreview componentMap={componentMap} code={code} className='w-100' />
                    </div>
                    <div className="w-100 h-100 px-3" style={{ display: activeTab === 'editor' ? 'block' : 'none', animation: activeTab === "editor" ? "fade-in 0.5s ease-in-out" : "" }}>
                        <CodeEditor code={code} onChange={handleCodeChange} updateCode={updateCode} className='w-100' />
                    </div>
                    <div className="w-100 h-100 px-3" style={{ display: activeTab === 'documentation' ? 'block' : 'none', animation: activeTab === "documentation" ? "fade-in 0.5s ease-in-out" : "" }}>
                        <MarkdownPreview markdown={markdown} className='w-100' />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ComponentPreview;
