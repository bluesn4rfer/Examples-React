import React, { useState, useEffect } from 'react';
import Babel from '@babel/standalone';

function CodePreview({ code }) {
    const [error, setError] = useState(null);
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        try {
        //   const evalFunc = new Function('React', code);
        //   const evaluated = evalFunc(React);
            const transformedCode = Babel.transform(code, {
                presets: ['es2015', 'react']
            }).code;
            setPreview(transformedCode);
        } catch (e) {
          setError(e.toString());
        }
    }, [code]);

  
    return (
      <div>
        {error ? (
          <div>{error}</div>
        ) : (
          <div>
            <h2>Preview</h2>
            <div dangerouslySetInnerHTML={{ __html: preview }} />
          </div>
        )}
      </div>
    );
  }

  export default CodePreview;