import { connect } from 'react-redux';
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

const mapStateToProps = state => ({
	appState: state.App,
});

function ComponentExample({appState, ...props}) {
	const defaultComponent = 'ExampleFormLogin';

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
		ExampleFormSubscriptionCancellation
	};

	const Component = componentMap[appState.page] ? componentMap[appState.page] : componentMap[defaultComponent];

 	return (
		<div>
			<Component />
		</div>
	);
}

export default connect(mapStateToProps, null)(ComponentExample);

