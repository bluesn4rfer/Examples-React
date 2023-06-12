function App() {
	let form = [
		{
			"title": "Step 1: Personal Information",
			"fields": [
				{
					"type": "text",
					"name": "first-name",
					"id": "first-name",
					"className": "form-control",
					"placeholder": "Enter your first name",
					"required": true,
					"label": {
						"text": "First Name"
					}
				},
				{
					"type": "text",
					"name": "last-name",
					"id": "last-name",
					"className": "form-control",
					"placeholder": "Enter your last name",
					"required": true,
					"label": {
						"text": "Last Name"
					}
				},
				{
					"type": "email",
					"name": "email",
					"id": "email",
					"className": "form-control",
					"placeholder": "Enter your email",
					"required": true,
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
				},
				{
					"type": "password",
					"name": "confirm-password",
					"id": "confirm-password",
					"className": "form-control",
					"placeholder": "Confirm your password",
					"required": true,
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
					"name": "phone",
					"id": "phone",
					"className": "form-control",
					"placeholder": "Enter your phone number",
					"required": true,
					"label": {
						"text": "Phone Number"
					}
				},
				{
					"type": "textarea",
					"name": "address",
					"id": "address",
					"className": "form-control",
					"placeholder": "Enter your address",
					"required": true,
					"label": {
						"text": "Address"
					}
				}
			]
		}
	];
	
	const btnPrevious = {
		"value": "Previous",
		"className": "btn btn-secondary"
	};

	const btnNext = {
		"value": "Next",
		"className": "btn btn-primary"
	};

	const btnSubmit = {
		"value": "Register",
		"id": "submit-button",
		"className": "btn btn-primary"
	};

	return <DisplayForm form={form} btnPrevious={btnPrevious} btnNext={btnNext} btnSubmit={btnSubmit} />;
}
