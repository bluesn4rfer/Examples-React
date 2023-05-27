import { useEffect, useState } from 'react';

import CodeEditor from './components/CodeEditor/Controller';
import CodePreview from './components/CodePreview/Controller';

import DisplayMenu from './components/Menus/Controller';
import DisplayForm from './components/Forms/Controller';
import Collapsible from './components/Collapsible/Controller';

function ComponentPreview({mode = 'preview', component, code, file, setCode}) {
	const componentMap = {
		Collapsible,
		DisplayForm,
		DisplayMenu
	};

	const [activeTab, setActiveTab] = useState(mode);
	const [updateCode, setUpdateCode] = useState(code);

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
				console.log('ComponentPreview.js fetchCode updating code & updateCode');
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
		console.log('ComponentPreview.js handleCodeChange() code = '+code);
		setCode(code);
	}

	const showView = () => {
		switch(activeTab.toLowerCase()){
			case "editor":
				return (<CodeEditor code={code} onChange={handleCodeChange} updateCode={updateCode} />);
			default:
				return (<CodePreview componentName={component} component={componentMap[component]} code={code} />);
		}
	}

	const tabsMenu = {
		className: "d-flex border-3 border-bottom border-primary list-unstyled",
		links: [
			{
			className: activeTab === 'preview' ? 'theme-secondary rounded-top' : 'theme-primary rounded-top',
			link: (
				<a
				href="#"
				className="d-block px-3 text-decoration-none"
				onClick={() => setActiveTab('preview')}
				>
				Preview
				</a>
			)
			},
			{
			className: activeTab === 'editor' ? 'theme-secondary rounded-top' : 'theme-primary rounded-top',
			link: (
				<a
				href="#"
				className="d-block px-3 text-decoration-none"
				onClick={() => setActiveTab('editor')}
				>
				Editor
				</a>
			)
			},
			{
			className: activeTab === 'component' ? 'theme-secondary rounded-top' : 'theme-primary rounded-top',
			link: (
				<a
				href="#"
				className="d-block px-3 text-decoration-none"
				onClick={() => setActiveTab('component')}
				>
				Component
				</a>
			)
			},
			{
			className: activeTab === 'docs' ? 'theme-secondary rounded-top' : 'theme-primary rounded-top',
			link: (
				<a
				href="#"
				className="d-block px-3 text-decoration-none"
				onClick={() => setActiveTab('docs')}
				>
				Documentation
				</a>
			)
			}
		]
	};

 	return (
		<div className='d-flex flex-column w-100'>
			<div className="d-flex flex-row w-100 justify-content-center"><DisplayMenu menu={tabsMenu} /></div>
			{showView()}
		</div>
	);
}

export default ComponentPreview;

