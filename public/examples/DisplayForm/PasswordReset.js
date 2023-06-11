function ExampleFormPasswordReset() {
	let formData = [
		{
			"title": "Password Reset Form",
			"fields": [
				{
					"type": "email",
					"name": "email",
					"id": "email",
					"class": "form-control",
					"placeholder": "Enter your email",
					"required": true,
					"label": {
						"text": "Email"
					}
				},
				{
					"type": "password",
					"name": "new-password",
					"id": "new-password",
					"class": "form-control",
					"placeholder": "Enter a new password",
					"required": true,
					"label": {
						"text": "New Password"
					}
				},
				{
					"type": "password",
					"name": "confirm-password",
					"id": "confirm-password",
					"class": "form-control",
					"placeholder": "Confirm the new password",
					"required": true,
					"label": {
						"text": "Confirm Password"
					}
				}
			]
		}			  
	];
	  
	const btnSubmit = {
		"value": "Reset Password",
		"id": "reset-button",
		"className": "btn btn-primary"
	};

	return <DisplayForm form={formData} btnSubmit={btnSubmit} />;
}
