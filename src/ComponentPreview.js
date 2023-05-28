import { useEffect, useState } from 'react';

import CodeEditor from './components/CodeEditor/Controller';
import CodePreview from './components/CodePreview/Controller';
import MarkdownPreview from './components/MarkdownPreview/Controller';

import DisplayMenu from './components/Menus/Controller';
import DisplayForm from './components/Forms/Controller';
import Collapsible from './components/Collapsible/Controller';

function ComponentPreview({mode = 'preview', component, code, file, doc, setCode}) {
	const componentMap = {
		Collapsible,
		DisplayForm,
		DisplayMenu
	};

	const [activeTab, setActiveTab] = useState(mode);
	const [updateCode, setUpdateCode] = useState(code);
	const [markdown, setMarkdown] = useState(null);

	/* TOP TABS */
	const tabsMenu = {
		className: "d-flex m-0 list-unstyled",
		links: [
			{
			className: activeTab === 'preview' ? 'theme-primary rounded-top' : 'theme-secondary border-start border-top border-end border-1 border-primary rounded-top',
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
			className: activeTab === 'editor' ? 'theme-primary rounded-top' : 'theme-secondary border-start border-top border-end border-1 border-primary rounded-top',
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
			// {
			// className: activeTab === 'component' ? 'theme-primary rounded-top' : 'theme-secondary border-start border-top border-end border-1 border-primary rounded-top',
			// link: (
			// 	<a
			// 	href="#"
			// 	className="d-block px-3 text-decoration-none"
			// 	onClick={() => setActiveTab('component')}
			// 	>
			// 	Component
			// 	</a>
			// )
			// },
			{
			className: activeTab === 'docs' ? 'theme-primary rounded-top' : 'theme-secondary border-start border-top border-end border-1 border-primary rounded-top',
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

	/* RENDER */
	const showView = () => {
		switch(activeTab.toLowerCase()){
			case "docs":
				return (<MarkdownPreview markdown={markdown} />);
			case "editor":
				return (<CodeEditor code={code} onChange={handleCodeChange} updateCode={updateCode} />);
			default:
				return (<CodePreview componentName={component} component={componentMap[component]} code={code} />);
		}
	}

 	return (
		<div className='d-flex flex-column w-100'>
			<div className="d-flex flex-row w-100 justify-content-center border-3 border-bottom border-primary"><DisplayMenu menu={tabsMenu} /></div>
			{showView()}
		</div>
	);
}

export default ComponentPreview;

