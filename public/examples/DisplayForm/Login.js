function ExampleFormLogin() {
	let formData = {
		"steps": [
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
						"label": "Username"
					},
					{
						"type": "password",
						"name": "password",
						"id": "password",
						"className": "form-control",
						"placeholder": "Enter your password",
						"required": true,
						"label": "Password"
					}
				]
			}
		],
		"buttons": {
			"previous": {
				"value": "Previous",
				"className": "btn btn-secondary"
			},
			"next": {
				"value": "Next",
				"className": "btn btn-primary"
			},					
			"submit": {
				"value": "Login",
				"id": "login-button",
				"className": "btn btn-primary"
			}
		}
	  };
	  

	return <DisplayForm form={formData}/>;
}
