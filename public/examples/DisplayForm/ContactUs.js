function ExampleFormContactUs() {
	let formData = {
		"showReview": true,
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
			"title": "Step 2: Additional Information",
			"fields": [
			  {
				"type": "text",
				"name": "phone",
				"id": "phone",
				"class": "form-control",
				"placeholder": "Enter your phone number",
				"required": true,
				"label": "Phone Number"
			  },
			  {
				"type": "textarea",
				"name": "message",
				"id": "message",
				"class": "form-control",
				"placeholder": "Enter your message",
				"required": true,
				"label": "Message"
			  }
			]
		  },
		  {
			"title": "Step 3: Submit",
			"fields": [
			  {
				"type": "select",
				"name": "gender",
				"id": "gender",
				"class": "form-control",
				"options": [
				  {
					"value": "male",
					"label": "Male"
				  },
				  {
					"value": "female",
					"label": "Female"
				  },
				  {
					"value": "other",
					"label": "Other"
				  }
				],
				"required": true,
				"label": "Gender"
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
