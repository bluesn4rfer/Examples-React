function ExampleFormRSVP() {
	let formData = {
		"steps": [
			{
				"title": "RSVP Form",
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
					"type": "select",
					"name": "attendance",
					"id": "attendance",
					"class": "form-control",
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
					"label": "Attendance"
				  },
				  {
					"type": "textarea",
					"name": "message",
					"id": "message",
					"class": "form-control",
					"placeholder": "Enter a message (optional)",
					"required": false,
					"label": "Message"
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
				"value": "Submit",
				"id": "submit-button",
				"className": "btn btn-primary"
			}
		}
	  };
	  

	return <DisplayForm form={formData}/>;
}
