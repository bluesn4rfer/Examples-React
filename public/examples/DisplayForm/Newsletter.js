function ExampleFormNewsletter() {
	let formData = [
		{
			"title": "Newsletter Sign-Up",
			"fields": [
				{
					"type": "text",
					"name": "first-name",
					"id": "first-name",
					"class": "form-control",
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
					"class": "form-control",
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
					"class": "form-control",
					"placeholder": "Enter your email",
					"required": true,
					"label": {
						"text": "Email"
					}
				},
				{
					"type": "checkbox",
					"name": "preferences",
					"id": "preferences",
					"class": "form-check-input",
					"label": {
						"text": "Newsletter Preferences"
					},
					"options": [
						{
						"value": "technology",
						"label": "Technology"
						},
						{
						"value": "fashion",
						"label": "Fashion"
						},
						{
						"value": "sports",
						"label": "Sports"
						},
						{
						"value": "music",
						"label": "Music"
						}
					]
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

	btnSubmit = {
		"value": "Subscribe",
		"id": "subscribe-button",
		"className": "btn btn-primary"
	};

	return <DisplayForm form={form} btnPrevious={btnPrevious} btnNext={btnNext} btnSubmit={btnSubmit} />;
}
