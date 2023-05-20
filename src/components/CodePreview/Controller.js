import React, { useState, useEffect, useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import { transform } from '@babel/standalone';

function CodePreview({ componentName, component, code }) {
  const [preview, setPreview] = useState('');

  const previewRef = useRef(null);

  useEffect(() => {
    try {
      //const transformedCode = transform("console.log('CodePreview/Controller.js from transformed code')", {
      const transformedCode = transform(code, {
        presets: ['react']
      }).code;
      console.log('CodePreview/Controller.js transformedCode = '+transformedCode);

      //const evalFunc = new Function('React', transformedCode);
      //const evalFunc = new Function ('React','component',`return ${transformedCode}()`);
      const evalFunc = new Function ('React',componentName,`return ${transformedCode}()`);
      console.log('CodePreview/Controller.js evalFunc = '+evalFunc);

 //     const evaluatedCode = evalFunc(React);
 //     console.log('CodePreview/Controller.js evaluatedCode = '+evaluatedCode);

//       const evalCode = `(React, ReactDOMServer) => {
//         return ${transformedCode}
//       }`;
// console.log('CodePreview/Controller.js evalCode = '+evalCode);
//       const evaluatedCode = evalCode(React,ReactDOMServer);

      //const script = document.createElement('script');
      const evaluatedCode = evalFunc(React,component);
      console.log('CodePreview/Controller.js evaluatedCode = '+JSON.stringify(evaluatedCode));
      const previewHtml = ReactDOMServer.renderToString(evaluatedCode);
      console.log('CodePreview/Controller.js previewHtml = '+previewHtml);
      //script.text = evaluatedCode;
      //script.text = previewHtml;

      if (previewRef.current) {
        previewRef.current.innerHTML = previewHtml;
        //previewRef.current.innerHTML = evaluatedCode;
        //previewRef.current.appendChild(script);
      }

      //setPreview(transformedCode);
    } catch (e) {
      console.log('CodePreview/Controller.js error = '+e.toString());
      setPreview(e.toString());
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
