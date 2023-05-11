import { connect } from 'react-redux';
import ExampleFormContactUs from './components/Forms/examples/ContactUs';
import ExampleFormRegistration from './components/Forms/examples/Registration';
import ExampleFormLogin from './components/Forms/examples/Login';
import ExampleFormSurvey from './components/Forms/examples/Survey';
import ExampleFormNewsletter from './components/Forms/examples/Newsletter';

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
		ExampleFormNewsletter
	};

	const Component = componentMap[appState.page] ? componentMap[appState.page] : componentMap[defaultComponent];

 	return (
		<div>
			<Component />
		</div>
	);
}

export default connect(mapStateToProps, null)(ComponentExample);

