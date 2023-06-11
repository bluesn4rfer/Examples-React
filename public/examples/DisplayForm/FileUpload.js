function ExampleFormFileUpload() {
	let formData = [
		{
			"title": "File Upload Form",
			"fields": [
				{
					"type": "file",
					"name": "file-upload",
					"id": "file-upload",
					"class": "form-control-file",
					"required": true,
					"label": {
						"text": "Choose File"
					}
				},
				{
					"type": "textarea",
					"name": "description",
					"id": "description",
					"class": "form-control",
					"placeholder": "Enter a description for the file",
					"required": false,
					"label": {
						"text": "File Description"
					}
				}
			]
		}			
	];

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

	return <DisplayForm form={form} btnPrevious={btnPrevious} btnNext={btnNext} btnSubmit={btnSubmit} />;
}
