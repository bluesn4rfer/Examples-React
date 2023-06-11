function ExampleFormLogin() {
	const useState = React.useState;
	const [showThankYou, setShowThankYou] = useState(false);

	let form = [
		{
			"title": "Login Form",
			"fields": [
				{
					"type": "text",
					"name": "username",
					"id": "username",
					"className": "form-control",
					"placeholder": "Enter your username",
					"required": true,
					"label": {
						"text": "Username"
					}
				},
				{
					"type": "password",
					"name": "password",
					"id": "password",
					"className": "form-control",
					"placeholder": "Enter your password",
					"required": true,
					"label": {
						"text": "Password"
					}
				}
			]
		}
	];

	const btnSubmit = {
		"value": "Login",
		"id": "login-button",
		"className": "btn btn-primary"
	};  

	const thankYou = (values) => {
		console.log('thankYou values = ' + JSON.stringify(values));

		setTimeout(() => {
			setShowThankYou(true);			
		}, 2000);	  
	};

	if(showThankYou === true){
		return <div>Thank You</div>
	}
	return <DisplayForm form={form} btnSubmit={btnSubmit} callback={thankYou} />;
}
