function ExampleFormRegistration() {
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
			"title": "Step 2: Account Information",
			"fields": [
			  {
				"type": "text",
				"name": "username",
				"id": "username",
				"class": "form-control",
				"placeholder": "Enter your username",
				"required": true,
				"label": "Username"
			  },
			  {
				"type": "password",
				"name": "password",
				"id": "password",
				"class": "form-control",
				"placeholder": "Enter your password",
				"required": true,
				"label": "Password"
			  },
			  {
				"type": "password",
				"name": "confirm-password",
				"id": "confirm-password",
				"class": "form-control",
				"placeholder": "Confirm your password",
				"required": true,
				"label": "Confirm Password"
			  }
			]
		  },
		  {
			"title": "Step 3: Contact Information",
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
				"name": "address",
				"id": "address",
				"class": "form-control",
				"placeholder": "Enter your address",
				"required": true,
				"label": "Address"
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
				"value": "Register",
				"id": "submit-button",
				"className": "btn btn-primary"
			}
		}
	  };
	  

	return <DisplayForm form={formData}/>;
}
