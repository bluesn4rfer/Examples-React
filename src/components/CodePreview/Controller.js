import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { transform } from '@babel/standalone';

function CodePreview({ componentMap, code }) {
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

			// eval(
			// 	`(function(React, ReactDOM, ${Object.keys(componentMap).join(
			// 	  ', '
			// 	)}) { ${transformedCode} })(React, ReactDOM, ${Object.values(
			// 	  componentMap
			// 	).join(', ')})`
			// );

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
    <div className="w-100 h-100 px-3">
      <div><h2>Preview</h2></div>
      <div ref={previewRef} id="codePreview" className='w-100'/>
    </div>
  );
}

export default CodePreview;
