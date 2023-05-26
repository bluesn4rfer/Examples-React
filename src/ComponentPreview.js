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
		switch(mode.toLowerCase()){
			case "editor":
				return (<CodeEditor code={code} onChange={handleCodeChange} updateCode={updateCode} />);
			default:
				return (<CodePreview componentName={component} component={componentMap[component]} code={code} />);
		}
	}

 	return (
		<div className='d-flex flex-row flex-grow-1 h-100'>
			{showView()}
		</div>
	);
}

export default ComponentPreview;

