import DisplayForm from '../Controller';

function ExampleFormLogin() {
	let formData = {
		"steps": [
			{
				"title": "Login Form",
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
					}
				]
			}
		],
		"submit": {
		  "value": "Login",
		  "id": "login-button",
		  "class": "btn btn-primary"
		}
	  };
	  

	return <DisplayForm formData={formData}/>;
}

export default ExampleFormLogin;
