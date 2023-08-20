function App() {
	let form = [
		{
			"title": "Password Reset Form",
			"fields": [
				{
					"type": "email",
					"input": {
						"name": "email",
						"id": "email",
						"className": "form-control",
						"placeholder": "Enter your email",
						"required": true
					},
					"label": {
						"text": "Email"
					}
				},
				{
					"type": "password",
					"input": {
						"name": "new-password",
						"id": "new-password",
						"className": "form-control",
						"placeholder": "Enter a new password",
						"required": true
					},
					"label": {
						"text": "New Password"
					}
				},
				{
					"type": "password",
					"input": {
						"name": "confirm-password",
						"id": "confirm-password",
						"className": "form-control",
						"placeholder": "Confirm the new password",
						"required": true
					},
					"label": {
						"text": "Confirm Password"
					}
				}
			]
		}			  
	];
	  
	const buttons = {
		"submit": {
			"value": "Reset Password",
			"id": "reset-button",
			"className": "btn btn-primary"
		}
	};

	return <DisplayForm form={form} buttons={buttons} />;
}
