function ExampleFormFeedback() {
	let form = {
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
					"name": "message",
					"id": "message",
					"class": "form-control",
					"placeholder": "Enter your message",
					"required": true,
					"label": {
						"text": "Message"
					}
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
					"label": {
						"text": "Rating"
					}
				  }
				],
			}		  
		]
	};
	  
	const btnPrevious = {
		"value": "Previous",
		"className": "btn btn-secondary"
	};

	const btnNext = {
		"value": "Next",
		"className": "btn btn-primary"
	};

	const btnSubmit = {
		"value": "Submit",
		"id": "submit-button",
		"className": "btn btn-primary"
	};

	return <DisplayForm form={form} btnPrevious={btnPrevious} btnNext={btnNext} btnSubmit={btnSubmit}/>;
}
