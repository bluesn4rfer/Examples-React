import DisplayForm from '../Controller';

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
		"submit": {
			"value": "Submit",
			"id": "submit-button",
			"class": "btn btn-primary"
		  }
	  };
	  

	return <DisplayForm formData={formData}/>;
}

export default ExampleFormRSVP;
