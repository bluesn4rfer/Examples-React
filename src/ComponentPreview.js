import ExampleFormContactUs from './components/Forms/examples/ContactUs';
import ExampleFormRegistration from './components/Forms/examples/Registration';
import ExampleFormLogin from './components/Forms/examples/Login';
import ExampleFormSurvey from './components/Forms/examples/Survey';
import ExampleFormNewsletter from './components/Forms/examples/Newsletter';
import ExampleFormPayment from './components/Forms/examples/Payment';
import ExampleFormFileUpload from './components/Forms/examples/FileUpload';
import ExampleFormFeedback from './components/Forms/examples/Feedback';
import ExampleFormComment from './components/Forms/examples/Comment';
import ExampleFormRSVP from './components/Forms/examples/RSVP';
import ExampleFormPasswordReset from './components/Forms/examples/PasswordReset';
import ExampleFormSubscriptionCancellation from './components/Forms/examples/SubscriptionCancellation';
import FontAwesomeIcons from './FontAwesomeIcons';


function ComponentPreview({code}) {
	const componentMap = {
		ExampleFormContactUs,
		ExampleFormRegistration,
		ExampleFormLogin,
		ExampleFormSurvey,
		ExampleFormNewsletter,
		ExampleFormPayment,
		ExampleFormFileUpload,
		ExampleFormFeedback,
		ExampleFormComment,
		ExampleFormRSVP,
		ExampleFormPasswordReset,
		ExampleFormSubscriptionCancellation,
		FontAwesomeIcons
	};

	const replaceComponentTagsWithComponents = (input) => {
		const componentRegex = /<([A-Za-z0-9]+)([^/>]*)\/?>/g;
	
		// Replace component tags with corresponding React components
		const replacedInput = input.replace(componentRegex, (match, tagName, attributes) => {
			const Component = componentMap[tagName];
			if (Component) {
			return <Component {...extractAttributes(attributes)} />;
			} else {
			return match; // Return the original tag if component not found in component map
			}
		});
	
		return replacedInput;
	}
	  
	const extractAttributes = (attributeString) => {
		const attributeRegex = /([A-Za-z0-9]+)=["']([^"']+)["']/g;
		const attributes = {};
	
		let match;
		while ((match = attributeRegex.exec(attributeString))) {
			const [, attributeName, attributeValue] = match;
			attributes[attributeName] = attributeValue;
		}
	
		return attributes;
	}

	//const Component = componentMap[component];
// Example usage
const input = '<div><div><ExampleFormContactUs /></div><div><Component2 style="test"><h1>Title</h1></Component2></div></div>';
const output = replaceComponentTagsWithComponents(input);
console.log(output);

 	return (
		<div dangerouslySetInnerHTML={{ __html: replaceComponentTagsWithComponents(input) }} />
	);
}

export default ComponentPreview;

