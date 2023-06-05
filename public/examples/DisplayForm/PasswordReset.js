function ExampleFormPasswordReset() {
	let formData = {
		"steps": [
			{
				"title": "Password Reset Form",
				"fields": [
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
					"type": "password",
					"name": "new-password",
					"id": "new-password",
					"class": "form-control",
					"placeholder": "Enter a new password",
					"required": true,
					"label": "New Password"
				  },
				  {
					"type": "password",
					"name": "confirm-password",
					"id": "confirm-password",
					"class": "form-control",
					"placeholder": "Confirm the new password",
					"required": true,
					"label": "Confirm Password"
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
				"value": "Reset Password",
				"id": "reset-button",
				"className": "btn btn-primary"
			}
		}
	  };
	  

	return <DisplayForm form={formData}/>;
}
