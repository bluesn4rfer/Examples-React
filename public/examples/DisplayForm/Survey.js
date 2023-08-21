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
			"title": "Step 2: Survey Questions",
			"fields": [
				{
					"type": "radio",
					"input": {
						"name": "experience",
						"id": "experience",
						"className": "form-control",
						"required": true,
						"options": [
							{
								"value": "excellent",
								"label": "Excellent"
							},
							{
								"value": "good",
								"label": "Good"
							},
							{
								"value": "fair",
								"label": "Fair"
							},
							{
								"value": "poor",
								"label": "Poor"
							}
						]
					},
					"label": {
						"text": "How would you rate your experience?"
					}
				},
				{
					"type": "textarea",
					"textarea": {
						"name": "feedback",
						"id": "feedback",
						"className": "form-control",
						"placeholder": "Enter your feedback",
						"required": true
					},
					"label": {
						"text": "Feedback"
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
		"submit" {
			"value": "Submit",
			"id": "submit-button",
			"className": "btn btn-primary"
		};
	}

	return <DisplayForm form={form} buttons={buttons} />;
}
