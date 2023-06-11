function ExampleFormSubscriptionCancellation() {
	let form = [
		{
			"title": "Subscription Cancellation Form",
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
					"name": "reason",
					"id": "reason",
					"class": "form-control",
					"placeholder": "Enter the reason for cancellation",
					"required": true,
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
		"class": "btn btn-danger"
	};

	return <DisplayForm form={form} btnSubmit={btnSubmit} />;
}
