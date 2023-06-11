function ExampleFormPayment() {
	let form = [
		{
			"title": "Payment Form",
			"fields": [
				{
					"type": "text",
					"name": "cardholder-name",
					"id": "cardholder-name",
					"class": "form-control",
					"placeholder": "Enter cardholder's name",
					"required": true,
					"label": {
						"text": "Cardholder's Name"
					}
				},
				{
					"type": "text",
					"name": "card-number",
					"id": "card-number",
					"class": "form-control",
					"placeholder": "Enter card number",
					"required": true,
					"label": {
						"text": "Card Number"
					}
				},
				{
					"type": "text",
					"name": "expiration-date",
					"id": "expiration-date",
					"class": "form-control",
					"placeholder": "MM/YYYY",
					"required": true,
					"label": {
						"text": "Expiration Date"
					}
				},
				{
					"type": "text",
					"name": "cvv",
					"id": "cvv",
					"class": "form-control",
					"placeholder": "Enter CVV",
					"required": true,
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
		"class": "btn btn-primary"
	};

	return <DisplayForm form={form} btnSubmit={btnSubmit} />;
}
