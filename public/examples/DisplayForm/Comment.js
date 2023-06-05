function ExampleFormComment() {
	let formData = {
		"steps": [
			{
				"title": "Comment Form",
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
					"name": "comment",
					"id": "comment",
					"class": "form-control",
					"placeholder": "Enter your comment",
					"required": true,
					"label": "Comment"
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
