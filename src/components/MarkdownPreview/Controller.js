import React, {useEffect, useState} from 'react';
import { marked } from 'marked';

function MarkdownPreview({ markdown }){
  const [html,setHtml] = useState('');
  
  useEffect(() => {
    if(!markdown){
      return;
    }

    marked.parse(markdown, (err, html) => {
      if (err) {
        console.error(err);
        return;
      }
      setHtml(html);
    });
  }, [setHtml, markdown]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default MarkdownPreview;