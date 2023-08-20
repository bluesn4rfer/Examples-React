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
			"title": "Step 2: Additional Information",
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
					"textarea": {
						"name": "message",
						"id": "message",
						"className": "form-control",
						"placeholder": "Enter your message",
					},
					"label": {
						"text": "Message"
					}
				}
			]
		},
		{
			"title": "Step 3: Submit",
			"fields": [
				{
					"type": "select",
					"select": {
						"name": "gender",
						"id": "gender",
						"className": "form-control",
						"options": [
							{
							"value": "male",
							"label": "Male"
							},
							{
							"value": "female",
							"label": "Female"
							},
							{
							"value": "other",
							"label": "Other"
							}
						],
						"required": true,
					},
					"label": {
						"text": "Gender"
					}
				}
			]
		}
	];

	const buttons = {
		"previous": {
			"value": "Previous",
			"className": "btn btn-secondary"
		},
		"next": {
			"value": "Next",
			"className": "btn btn-primary"
		},
		"submit": {
			"value": "Submit",
			"id": "submit-button",
			"className": "btn btn-primary"
		}
	}



	return <DisplayForm form={form} useReview={true} buttons={buttons} />;
}
