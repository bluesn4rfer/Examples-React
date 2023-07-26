const { useState } = React;

function App(){
	const [showThankYou, setShowThankYou] = useState(null);

	let form = [
		{
			"title": "Login Form",
			"fields": [
				{
					"type": "text",
					"input": {
						"name": "username",
						"id": "username",
						"className": "form-control",
						"placeholder": "Enter your username",
						"required": true
					},
					"label": {
						"text": "Username"
					}
				},
				{
					"type": "password",
					"input": {
						"name": "password",
						"id": "password",
						"className": "form-control",
						"placeholder": "Enter your password",
						"required": true
					},
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
	
	const handleSubmit = (values) => {
		console.log('thankYou values = ' + JSON.stringify(values));
		setShowThankYou(true);
	};
	
	if(showThankYou){
		return <div>Thank You</div>;
	}
	
	return <DisplayForm form={form} btnSubmit={btnSubmit} callback={handleSubmit} />;
}

