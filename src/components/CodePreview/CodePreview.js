import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
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

					const codePreview = createRoot(document.getElementById('codePreview'));
					codePreview.render(<App />);
				`, {
				presets: ['react']
			}).code;

			const evalFunc = new Function(
				'React',
				'ReactDOM',
				'createRoot',
				...Object.keys(componentMap),
				transformedCode
			);

			console.debug('CodePreview/Controller.js evalFunc = ' + evalFunc);
			evalFunc(React, ReactDOM, createRoot, ...Object.values(componentMap));
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
