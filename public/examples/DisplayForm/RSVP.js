function App() {
	let form = [
		{
			"title": "RSVP Form",
			"fields": [
				{
					"type": "text",
					"name": "name",
					"id": "name",
					"className": "form-control",
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
					"className": "form-control",
					"placeholder": "Enter your email",
					"required": true,
					"label": {
						"text": "Email"
					}
				},
				{
					"type": "select",
					"name": "attendance",
					"id": "attendance",
					"className": "form-control",
					"options": [
					{
						"value": "yes",
						"label": "Yes, I will attend"
					},
					{
						"value": "no",
						"label": "No, I will not attend"
					}
					],
					"required": true,
					"label": {
						"text": "Attendance"
					}
				},
				{
					"type": "textarea",
					"name": "message",
					"id": "message",
					"className": "form-control",
					"placeholder": "Enter a message (optional)",
					"required": false,
					"label": {
						"text": "Message"
					}
				}
			]
		}			  
	];
	  
	const btnSubmit = {
		"value": "Submit",
		"id": "submit-button",
		"className": "btn btn-primary"
	};

	return <DisplayForm form={form} btnSubmit={btnSubmit} />;
}
