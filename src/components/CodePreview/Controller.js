import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { transform } from '@babel/standalone';

function CodePreview({ componentMap, code }) {
  const previewRef = useRef(null);

  useEffect(() => {
    try {
      const transformedCode = transform(code, {
        presets: ['react']
      }).code;

      const evalFunc = new Function('React', ...Object.keys(componentMap), `return (${transformedCode})()`);
      console.log('CodePreview/Controller.js evalFunc = '+evalFunc);
      const evaluatedCode = evalFunc(React, ...Object.values(componentMap));

      if (previewRef.current) {
        ReactDOM.render(evaluatedCode, previewRef.current);
      }
    } catch (e) {
      console.log('CodePreview/Controller.js error = ' + e.toString());
    }
  }, [componentMap, code]);

  return (
    <div className="w-100 h-100 px-3">
      <div><h2>Preview</h2></div>
      <div ref={previewRef} className='w-100'/>
    </div>
  );
}

export default CodePreview;
