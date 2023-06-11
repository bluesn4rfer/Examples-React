import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import CodeEditor from './components/CodeEditor/Controller';
import CodePreview from './components/CodePreview/Controller';
import MarkdownPreview from './components/MarkdownPreview/Controller';

import DisplayMenu from './components/Menus/Controller';
import DisplayForm from './components/Forms/Controller';
import Collapsible from './components/Collapsible/Controller';

function ComponentPreview() {
	const componentMap = {
		Collapsible,
		DisplayForm,
		DisplayMenu
	};

	const { mode = 'preview', component = 'DisplayForm', example = 'Login' } = useParams();
	const [file, setFile] = useState('/examples/'+component+'/'+example+'.js');
	const [doc, setDoc] = useState('/documentation/'+component+'.md');

	useEffect(() => {
		setFile('/examples/'+component+'/'+example+'.js');
		setDoc('/documentation/'+component+'.md');
	}, [component, example]);

	const [code, setCode] = useState(null);
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
			})
			.catch((error) => {
			  console.error('Error fetching code:', error);
			  // Handle error condition if desired
			});
		};
	
		if (setCode && file) {
		  fetchCode();
		}
	}, [setCode, file]);

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

	/* RENDER */
	const showView = () => {
		switch(mode.toLowerCase()){
			case "documentation":
				console.log('ComponentPreview.js showView() documentation');
				return (<MarkdownPreview markdown={markdown} />);
			case "editor":
				console.log('ComponentPreview.js showView() editor');
				return (<CodeEditor code={code} onChange={handleCodeChange} />);
			default:
				console.log('ComponentPreview.js showView() preview');
				return (<CodePreview componentMap={componentMap} code={code} />);
		}
	}

 	return (
		<div key={`${component}-${example}`} className='d-flex flex-column w-100'>
			<div className="d-flex flex-row w-100 justify-content-center border-3 border-bottom border-primary"><DisplayMenu menu={tabsMenu} /></div>
			{showView()}
		</div>
	);
}

export default ComponentPreview;

