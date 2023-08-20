function App() {
	let form = [
		{
			"title": "Comment Form",
			"fields": [
				{
					"type": "text",
					"input": {
						"name": "name",
						"id": "name",
						"className": "form-control",
						"placeholder": "Enter your name",
						"required": true
					},
					"label": {
						"text": "Name"
					}
				},
				{
					"type": "email",
					"input": {
						"name": "email",
						"id": "email",
						"className": "form-control",
						"placeholder": "Enter your email",
						"required": true,
					},
					"label": {
						"text": "Email"
					}
				},
				{
					"type": "textarea",
					"textarea": {
						"name": "comment",
						"id": "comment",
						"className": "form-control",
						"placeholder": "Enter your comment",
						"required": true,
					},
					"label": {
						"text": "Comment"
					}
				}
			]
		}						
	];

	const buttons = {
		"submit": {
			"value": "Submit",
			"id": "submit-button",
			"className": "btn btn-primary"
		}
	}

	return <DisplayForm form={form} buttons={buttons} />;
}
