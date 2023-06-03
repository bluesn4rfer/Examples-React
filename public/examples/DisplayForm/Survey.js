function ExampleFormSurvey() {
	let formData = {
		"steps": [
		  {
			"title": "Step 1: Personal Information",
			"fields": [
			  {
				"type": "text",
				"name": "first-name",
				"id": "first-name",
				"class": "form-control",
				"placeholder": "Enter your first name",
				"required": true,
				"label": "First Name"
			  },
			  {
				"type": "text",
				"name": "last-name",
				"id": "last-name",
				"class": "form-control",
				"placeholder": "Enter your last name",
				"required": true,
				"label": "Last Name"
			  },
			  {
				"type": "email",
				"name": "email",
				"id": "email",
				"class": "form-control",
				"placeholder": "Enter your email",
				"required": true,
				"label": "Email"
			  }
			]
		  },
		  {
			"title": "Step 2: Survey Questions",
			"fields": [
			  {
				"type": "radio",
				"name": "experience",
				"id": "experience",
				"class": "form-control",
				"label": "How would you rate your experience?",
				"options": [
				  {
					"value": "excellent",
					"label": "Excellent"
				  },
				  {
					"value": "good",
					"label": "Good"
				  },
				  {
					"value": "fair",
					"label": "Fair"
				  },
				  {
					"value": "poor",
					"label": "Poor"
				  }
				],
				"required": true
			  },
			  {
				"type": "textarea",
				"name": "feedback",
				"id": "feedback",
				"class": "form-control",
				"placeholder": "Enter your feedback",
				"required": true,
				"label": "Feedback"
			  }
			]
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
