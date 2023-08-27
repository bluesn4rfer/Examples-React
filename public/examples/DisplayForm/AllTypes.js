function App() {
	let form = [
		{
			"title": "All Types",
			"fields": [
				{
					"type": "text",
					"input": {
						"name": "text",
						"id": "text",
						"className": "form-control",
						"placeholder": "Text Input",
						"required": true
					},
					"label": {
						"text": "Text"
					}
				},
				{
					"type": "textarea",
					"textarea": {
						"name": "textarea",
						"id": "textarea",
						"className": "form-control",
						"placeholder": "Textarea Input",
						"required": true
					},
					"label": {
						"text": "Textarea"
					}
				},
				{
					"type": "email",
					"input": {
						"name": "email",
						"id": "email",
						"className": "form-control",
						"placeholder": "Email Input",
						"required": true
					},
					"label": {
						"text": "Email"
					}
				},
				{
					"type": "password",
					"input": {
						"name": "password",
						"id": "password",
						"className": "form-control",
						"placeholder": "Password Input",
						"required": true
					},
					"label": {
						"text": "Password"
					}
				},		
				{
					"type": "select",
					"select": {
						"name": "select",
						"id": "select",
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
						"required": true
					},
					"label": {
						"text": "Select"
					}
				},	
				{
					"type": "checkbox",
					"input": {
						"name": "checkbox",
						"id": "checkbox",
						"className": "form-check-input",
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
					},
					"label": {
						"text": "Checkbox"
					}
				},
				{
					"type": "radio",
					"input": {
						"name": "radio",
						"id": "radio",
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
					},
					"label": {
						"text": "Radio"
					}
				},				
				{
					"type": "range",
					"input": {
						"name": "range",
						"id": "range",
						"className": "form-range",
						"required": true
					},
					"label": {
						"text": "Range"
					}
				},
				// - *state* WIP
				{
					"type": "file",
					"input": {
						"name": "file-upload",
						"id": "file-upload",
						"className": "form-control-file",
						"required": true
					},
					"label": {
						"text": "Choose File"
					}
				},
				{
					"type": "hidden",
					"input": {
						"name": "hidden",
						"id": "hidden",
						"className": "form-control-file",
						"required": true
					},
					"label": {
						"text": "Hidden"
					}
				},
				{
					"type": "button",
					"button": {
						"name": "button",
						"id": "button",
						"className": "btn btn-secondary",
						"required": true,
						"value": "Button"
					},
					"label": {
						"text": "Button",
						"style": { "display": "none" }
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
