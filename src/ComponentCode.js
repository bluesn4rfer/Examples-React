import React, { useEffect } from 'react';
import Collapsible from './components/Collapsible/Controller';
import Resizable from './components/Resizable/Controller';

function ComponentCode() {
	const code = `<html>
<head>
	<title>Testing code view</title>
</head>
<body>
	Some code here {shit}
</body>
</html>
	`;

	const handleResize = (newWidth, newHeight) => {
		console.log(`New width: ${newWidth}, new height: ${newHeight}`);
	  };

	return (
		// <Resizable id='code' onResize={handleResize} resizeDirection="both">
		// 	<Collapsible id='codeHCollapse' direction='left' title='CODE'>
		// 		<Collapsible id='menuVCollapse' title='CODE'>
		// 			<pre className='overflow-hidden' style={{width:'300px'}}>{code}</pre>
		// 		</Collapsible>
		// 	</Collapsible>
		// </Resizable>
		<Resizable onResize={handleResize} resizeDirection="both">
        <div className="content">Resizable content goes here</div>
      </Resizable>
	);
}

export default ComponentCode;
