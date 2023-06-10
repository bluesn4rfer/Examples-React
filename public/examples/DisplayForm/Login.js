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
		]
	  };

	const btnPrevious = {
		"value": "Previous",
		"className": "btn btn-secondary"
	};

	const btnNext = {
		"value": "Next",
		"className": "btn btn-primary"
	};

	const btnSubmit = {
		"value": "Login",
		"id": "login-button",
		"className": "btn btn-primary"
	};  

	return <DisplayForm form={formData} btnPrevious={btnPrevious} btnNext={btnNext} btnSubmit={btnSubmit} />;
}
