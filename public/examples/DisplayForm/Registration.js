function App() {
	let form = [
		{
			"title": "Step 1: Personal Information",
			"fields": [
				{
					"type": "text",
					"input": {
						"name": "first-name",
						"id": "first-name",
						"className": "form-control",
						"placeholder": "Enter your first name",
						"required": true
					},
					"label": {
						"text": "First Name"
					}
				},
				{
					"type": "text",
					"input": {
						"name": "last-name",
						"id": "last-name",
						"className": "form-control",
						"placeholder": "Enter your last name",
						"required": true
					},
					"label": {
						"text": "Last Name"
					}
				},
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
				}
			]
		},
		{
			"title": "Step 2: Account Information",
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
				},
				{
					"type": "password",
					"input": {
						"name": "confirm-password",
						"id": "confirm-password",
						"className": "form-control",
						"placeholder": "Confirm your password",
						"required": true
					},
					"label": {
						"text": "Confirm Password"
					}
				}
			]
		},
		{
			"title": "Step 3: Contact Information",
			"fields": [
				{
					"type": "text",
					"input": {
						"name": "phone",
						"id": "phone",
						"className": "form-control",
						"placeholder": "Enter your phone number",
						"required": true
					},
					"label": {
						"text": "Phone Number"
					}
				},
				{
					"type": "textarea",
					"input": {
						"name": "address",
						"id": "address",
						"className": "form-control",
						"placeholder": "Enter your address",
						"required": true
					},
					"label": {
						"text": "Address"
					}
				}
			]
		}
	];
	
	const buttons = {
		"submit": {
			"value": "Register",
			"id": "submit-button",
			"className": "btn btn-primary"
		},
		"previous": {
			"value": "Previous",
			"className": "btn btn-secondary"
		},
		"next": {
			"value": "Next",
			"className": "btn btn-primary"
		}
	};

	return <DisplayForm form={form} buttons={buttons} />;
}
