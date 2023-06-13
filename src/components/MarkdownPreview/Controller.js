import React, {useEffect, useState} from 'react';
import * as marked from 'marked';

function MarkdownPreview({ markdown, ...props }){
  const [html,setHtml] = useState('');
  
  useEffect(() => {
    if(!markdown){
      return;
    }

    const asHtml = marked.parse(markdown, {mangle: false, headerIds: false});
    setHtml(asHtml);
  }, [setHtml, markdown]);

  return <div dangerouslySetInnerHTML={{ __html: html }} {...props} />;
};

export default MarkdownPreview;