import SidePanel from './components/SidePanel';

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

	return (
		<SidePanel id='code' title='CODE' direction='left' content={<pre className='overflow-hidden' style={{width:'300px'}}>{code}</pre>} />
	);
}

export default ComponentCode;
