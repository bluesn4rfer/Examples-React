import { useEffect, useState } from 'react';

import CodeEditor from './components/CodeEditor/Controller';
import CodePreview from './components/CodePreview/Controller';

import DisplayMenu from './components/Menus/Controller';
import DisplayForm from './components/Forms/Controller';
import Collapsible from './components/Collapsible/Controller';

function ComponentPreview({component, code, file, setCode}) {
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
	  }, [setUpdateCode, file]);

	const handleCodeChange = (code) => {
		console.log('ComponentPreview.js handleCodeChange() invoked');
		console.log('ComponentPreview.js handleCodeChange() code = '+code);
		setCode(code);
	}

 	return (
		<div className='d-flex flex-row flex-grow-1'>
			<div className='d-flex col'><CodePreview componentName={component} component={componentMap[component]} code={code} /></div>
			<div className='d-flex col'><CodeEditor code={code} onChange={handleCodeChange} updateCode={updateCode} /></div>
		</div>
	);
}

export default ComponentPreview;

