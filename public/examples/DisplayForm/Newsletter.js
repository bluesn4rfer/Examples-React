function ExampleFormNewsletter() {
	let formData = {
		"steps": [
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
					"label": "First Name"
					},
					{
					"type": "text",
					"name": "last-name",
					"id": "last-name",
					"class": "form-control",
					"placeholder": "Enter your last name",
					"required": true,
					"label": "Last Name"
					},
					{
					"type": "email",
					"name": "email",
					"id": "email",
					"class": "form-control",
					"placeholder": "Enter your email",
					"required": true,
					"label": "Email"
					},
					{
						"type": "checkbox",
						"name": "preferences",
						"id": "preferences",
						"class": "form-check-input",
						"label": "Newsletter Preferences",
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
		],
		"buttons": {
			"previous": {
				"value": "Previous",
				"className": "btn btn-secondary"
			},
			"next": {
				"value": "Next",
				"className": "btn btn-primary"
			},					
			"submit": {
				"value": "Subscribe",
				"id": "subscribe-button",
				"className": "btn btn-primary"
			}
		}
	  };
	  

	return <DisplayForm form={formData}/>;
}
