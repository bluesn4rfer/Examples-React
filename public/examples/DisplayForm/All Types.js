function App() {
	let form = [
		{
			"title": "All Types",
			"fields": [
				{
					"type": "text",
					"name": "text",
					"id": "text",
					"className": "form-control",
					"placeholder": "Text Input",
					"required": true,
					"label": {
						"text": "Text"
					}
				},
				{
					"type": "textarea",
					"name": "textarea",
					"id": "textarea",
					"className": "form-control",
					"placeholder": "Textarea Input",
					"required": true,
					"label": {
						"text": "Textarea"
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
				// - *email*
				// - *password*
				// - *checkbox* WIP
				// - *radio* WIP
				// - *select*
				// - *range* WIP
				// - *state* WIP
				// - *file* WIP
				// - *fieldset* WIP
				// - *hidden* WIP
				// - *button*
				// - *image* WIP  				

			]
		}						
	];

	const btnSubmit = {
		"value": "Submit",
		"id": "submit-button",
		"className": "btn btn-primary"
	}

	return <DisplayForm form={form} btnSubmit={btnSubmit} />;
}
