function App() {
	let form = [
		{
			"title": "Subscription Cancellation Form",
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
						"name": "reason",
						"id": "reason",
						"className": "form-control",
						"placeholder": "Enter the reason for cancellation",
						"required": true
					},
					"label": {
						"text": "Reason for Cancellation"
					}
				}
			]
		}			  
	];
	  
	const btnSubmit = {
		"value": "Cancel Subscription",
		"id": "cancel-button",
		"className": "btn btn-danger"
	};

	return <DisplayForm form={form} btnSubmit={btnSubmit} />;
}
