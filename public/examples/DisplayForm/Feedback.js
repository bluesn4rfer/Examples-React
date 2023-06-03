function ExampleFormFeedback() {
	let formData = {
		"steps": [
			{
				"title": "Feedback Form",
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
					"name": "message",
					"id": "message",
					"class": "form-control",
					"placeholder": "Enter your message",
					"required": true,
					"label": "Message"
				  },
				  {
					"type": "select",
					"name": "rating",
					"id": "rating",
					"class": "form-control",
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
					"label": "Rating"
				  }
				],
			}		  
		],
		"submit": {
			"value": "Submit",
			"id": "submit-button",
			"class": "btn btn-primary"
		}
	};
	  

	return <DisplayForm formData={formData}/>;
}
