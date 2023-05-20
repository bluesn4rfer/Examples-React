import DisplayForm from '../Controller';

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
		"submit": {
			"value": "Pay Now",
			"id": "pay-button",
			"class": "btn btn-primary"
		  }
	  };
	  

	return <DisplayForm formData={formData}/>;
}

export default ExampleFormFileUpload;
