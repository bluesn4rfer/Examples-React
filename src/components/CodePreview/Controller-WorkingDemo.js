import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { transform } from '@babel/standalone';

function CodePreview() {
  const previewRef = useRef(null);
  const [code] = useState(`function Test(){
    const handleClick = () => {
      console.log('Hello World');
      alert('Hello World');
    };

    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={handleClick}>Hello World</button>
      </div>
    );
  }`);

  useEffect(() => {
    try {
      const transformedCode = transform(code, {
        presets: ['react']
      }).code;

      const evalFunc = new Function('React', `return (${transformedCode})()`);
      const evaluatedCode = evalFunc(React);

      if (previewRef.current) {
        ReactDOM.render(evaluatedCode, previewRef.current);
      }
    } catch (e) {
      console.log('CodePreview/Controller.js error = ' + e.toString());
    }
  }, [code]);

  return (
    <div>
      <h2>Preview</h2>
      <div ref={previewRef} />
    </div>
  );
}

export default CodePreview;
