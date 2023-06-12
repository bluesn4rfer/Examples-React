function App() {
	let form = [
		{
			"title": "Newsletter Sign-Up",
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
				},
				{
					"type": "checkbox",
					"name": "preferences",
					"id": "preferences",
					"className": "form-check-input",
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

	btnSubmit = {
		"value": "Subscribe",
		"id": "subscribe-button",
		"className": "btn btn-primary"
	};

	return <DisplayForm form={form} btnSubmit={btnSubmit} />;
}
