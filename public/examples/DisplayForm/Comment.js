function ExampleFormComment() {
	let form [
		{
			"title": "Comment Form",
			"fields": [
				{
				"type": "text",
				"name": "name",
				"id": "name",
				"class": "form-control",
				"placeholder": "Enter your name",
				"required": true,
				"label": {
					"text": "Name"
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
				"type": "textarea",
				"name": "comment",
				"id": "comment",
				"class": "form-control",
				"placeholder": "Enter your comment",
				"required": true,
				"label": {
					"text": "Comment"
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
	}

	return <DisplayForm form={form} btnPrevious={btnPrevious} btnNext={btnNext} btnSubmit={btnSubmit} />;
}
