function App() {
	let form = [
		{
			"title": "Feedback Form",
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
						"required": true
					},
					"label": {
						"text": "Email"
					}
				},
				{
					"type": "textarea",
					"textarea": {
						"name": "message",
						"id": "message",
						"className": "form-control",
						"placeholder": "Enter your message",
						"required": true
					},
					"label": {
						"text": "Message"
					}
				},
				{
					"type": "select",
					"select": {
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
						"required": true
					},
					"label": {
						"text": "Rating"
					}
				}
			],
		}		  
	];
	  
	const btnSubmit = {
		"value": "Submit",
		"id": "submit-button",
		"className": "btn btn-primary"
	};

	return <DisplayForm form={form} btnSubmit={btnSubmit}/>;
}
