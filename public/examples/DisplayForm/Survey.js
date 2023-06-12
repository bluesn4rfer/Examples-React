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
			"title": "Step 2: Survey Questions",
			"fields": [
				{
					"type": "radio",
					"name": "experience",
					"id": "experience",
					"className": "form-control",
					"label": {
						"text": "How would you rate your experience?"
					},
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
					],
					"required": true
				},
				{
					"type": "textarea",
					"name": "feedback",
					"id": "feedback",
					"className": "form-control",
					"placeholder": "Enter your feedback",
					"required": true,
					"label": {
						"text": "Feedback"
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
		"value": "Submit",
		"id": "submit-button",
		"className": "btn btn-primary"
	};

	return <DisplayForm form={form} btnPrevious={btnPrevious} btnNext={btnNext} btnSubmit={btnSubmit} />;
}
