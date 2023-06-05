function ExampleFormSubscriptionCancellation() {
	let formData = {
		"steps": [
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
					"label": "Name"
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
					"type": "textarea",
					"name": "reason",
					"id": "reason",
					"class": "form-control",
					"placeholder": "Enter the reason for cancellation",
					"required": true,
					"label": "Reason for Cancellation"
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
				"value": "Cancel Subscription",
				"id": "cancel-button",
				"class": "btn btn-danger"
			}
		}
	  };
	  

	return <DisplayForm form={formData}/>;
}
