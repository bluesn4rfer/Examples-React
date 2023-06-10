function ExampleFormContactUs() {
	let form = {
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
				"label": {
					"text": "First Name"
				}
			  },
			  {
				"type": "text",
				"name": "last-name",
				"id": "last-name",
				"class": "form-control",
				"placeholder": "Enter your last name",
				"required": true,
				"label": {
					"text": "Last Name"
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
				"label": {
					"text": "Phone Number"
				}
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
				"label": {
					"text": "Gender"
				}
			  }
			]
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

	return <DisplayForm form={form} useReview={true} btnPrevious={btnPrevious} btnNext={btnNext} btnSubmit={btnSubmit} />;
}
