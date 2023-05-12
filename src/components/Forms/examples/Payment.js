import DisplayForm from '../Controller';

function ExampleFormPayment() {
	let formData = {
		"steps": [
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
					"label": "Cardholder's Name"
				  },
				  {
					"type": "text",
					"name": "card-number",
					"id": "card-number",
					"class": "form-control",
					"placeholder": "Enter card number",
					"required": true,
					"label": "Card Number"
				  },
				  {
					"type": "text",
					"name": "expiration-date",
					"id": "expiration-date",
					"class": "form-control",
					"placeholder": "MM/YYYY",
					"required": true,
					"label": "Expiration Date"
				  },
				  {
					"type": "text",
					"name": "cvv",
					"id": "cvv",
					"class": "form-control",
					"placeholder": "Enter CVV",
					"required": true,
					"label": "CVV"
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

export default ExampleFormPayment;
