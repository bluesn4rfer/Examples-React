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
					"placeholder": "Email Input",
					"required": true,
					"label": {
						"text": "Email"
					}
				},
				{
					"type": "password",
					"name": "password",
					"id": "password",
					"className": "form-control",
					"placeholder": "Password Input",
					"required": true,
					"label": {
						"text": "Password"
					}
				},		
				// - *radio* WIP
				{
					"type": "select",
					"name": "rating",
					"id": "rating",
					"className": "form-control",
					"options": [
						{
						"value": "5",
						"label": "Excellent"
						},
						{
						"value": "4",
						"label": "Good"
						},
						{
						"value": "3",
						"label": "Neutral"
						},
						{
						"value": "2",
						"label": "Poor"
						},
						{
						"value": "1",
						"label": "Very Poor"
						}
					],
					"required": true,
					"label": {
						"text": "Rating"
					}
				},
				{
					"type": "checkbox",
					"name": "rating",
					"id": "rating",
					"className": "form-control",
					"options": [
						{
						"value": "5",
						"label": "Excellent"
						},
						{
						"value": "4",
						"label": "Good"
						},
						{
						"value": "3",
						"label": "Neutral"
						},
						{
						"value": "2",
						"label": "Poor"
						},
						{
						"value": "1",
						"label": "Very Poor"
						}
					],
					"required": true,
					"label": {
						"text": "Rating"
					}
				},	
				// - *range* WIP
				// - *state* WIP
				// - *file* WIP
				// - *fieldset* WIP
				// - *hidden* WIP
				{
					"type": "button",
					"name": "button",
					"id": "button",
					"className": "btn btn-secondary",
					"required": true,
					"label": {
						"text": "Button",
						"style": { "display": "none" }
					},
					"value": "Button"
				}				
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
