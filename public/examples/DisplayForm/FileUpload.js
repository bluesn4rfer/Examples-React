function ExampleFormFileUpload() {
	let formData = {
		"steps": [
			{
				"title": "File Upload Form",
				"fields": [
				  {
					"type": "file",
					"name": "file-upload",
					"id": "file-upload",
					"class": "form-control-file",
					"required": true,
					"label": "Choose File"
				  },
				  {
					"type": "textarea",
					"name": "description",
					"id": "description",
					"class": "form-control",
					"placeholder": "Enter a description for the file",
					"required": false,
					"label": "File Description"
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
