function App() {
	let form = [
		{
			"title": "Payment Form",
			"fields": [
				{
					"type": "text",
					"input": {
						"name": "cardholder-name",
						"id": "cardholder-name",
						"className": "form-control",
						"placeholder": "Enter cardholder's name",
						"required": true
					},
					"label": {
						"text": "Cardholder's Name"
					}
				},
				{
					"type": "text",
					"input": {
						"name": "card-number",
						"id": "card-number",
						"className": "form-control",
						"placeholder": "Enter card number",
						"required": true
					},
					"label": {
						"text": "Card Number"
					}
				},
				{
					"type": "text",
					"input": {
						"name": "expiration-date",
						"id": "expiration-date",
						"className": "form-control",
						"placeholder": "MM/YYYY",
						"required": true
					},
					"label": {
						"text": "Expiration Date"
					}
				},
				{
					"type": "text",
					"input": {
						"name": "cvv",
						"id": "cvv",
						"className": "form-control",
						"placeholder": "Enter CVV",
						"required": true
					},
					"label": {
						"text": "CVV"
					}
				}
			]
		}		
	];
	  
	const btnSubmit = {
		"value": "Pay Now",
		"id": "pay-button",
		"className": "btn btn-primary"
	};

	return <DisplayForm form={form} btnSubmit={btnSubmit} />;
}
