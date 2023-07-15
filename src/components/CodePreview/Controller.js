import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { transform } from '@babel/standalone';

function CodePreview({ componentMap, code, ...props }) {
	console.log('CodePreview/Controller.js CodePreview() invoked');

  	const previewRef = useRef(null);

	useEffect(() => {
		console.debug('CodePreview/Controller.js useEffect() code = '+code);
		if (code === null || typeof code === 'undefined') {
			return;
		}

		try {
			const transformedCode = transform(`
					${code}
					
					ReactDOM.render(<App />, document.getElementById('codePreview'));
				`, {
				presets: ['react']
			}).code;

			const evalFunc = new Function(
				'React',
				'ReactDOM',
				...Object.keys(componentMap),
				transformedCode
			);

			console.debug('CodePreview/Controller.js evalFunc = ' + evalFunc);
			evalFunc(React, ReactDOM, ...Object.values(componentMap));
		} catch (e) {
			console.error('CodePreview/Controller.js error = ' + e.toString());
			if (previewRef.current) {
				previewRef.current.innerHTML = '<pre>' + e.toString() + '</pre>';
			}
		}
	}, [componentMap, code]);

  return (
      <div ref={previewRef} id="codePreview" {...props} />
  );
}

export default CodePreview;
