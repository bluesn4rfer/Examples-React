function App() {
	let form = [
		{
			"title": "File Upload Form",
			"fields": [
				{
					"type": "file",
					"name": "file-upload",
					"id": "file-upload",
					"className": "form-control-file",
					"required": true,
					"label": {
						"text": "Choose File"
					}
				},
				{
					"type": "textarea",
					"name": "description",
					"id": "description",
					"className": "form-control",
					"placeholder": "Enter a description for the file",
					"required": false,
					"label": {
						"text": "File Description"
					}
				}
			]
		}			
	];

	const btnSubmit = {
		"value": "Submit",
		"id": "submit-button",
		"className": "btn btn-primary"
	};

	return <DisplayForm form={form} btnSubmit={btnSubmit} />;
}
