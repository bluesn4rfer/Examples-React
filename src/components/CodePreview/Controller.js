import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { transform } from '@babel/standalone';

function CodePreview({ componentName, component, code }) {
  const previewRef = useRef(null);

  useEffect(() => {
    try {
      const transformedCode = transform(code, {
        presets: ['react']
      }).code;

      const evalFunc = new Function('React', componentName, `return (${transformedCode})()`);
      const evaluatedCode = evalFunc(React, component);

      if (previewRef.current) {
        ReactDOM.render(evaluatedCode, previewRef.current);
      }
    } catch (e) {
      console.log('CodePreview/Controller.js error = ' + e.toString());
    }
  }, [code]);

  return (
    <div className="w-100 px-3">
      <h2>Preview</h2>
      <div ref={previewRef} />
    </div>
  );
}

export default CodePreview;
