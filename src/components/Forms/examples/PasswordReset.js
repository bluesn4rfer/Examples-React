import DisplayForm from '../Controller';

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
		"submit": {
			"value": "Reset Password",
			"id": "reset-button",
			"class": "btn btn-primary"
		  }
	  };
	  

	return <DisplayForm formData={formData}/>;
}

export default ExampleFormPasswordReset;