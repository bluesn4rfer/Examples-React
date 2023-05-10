import { connect } from 'react-redux';
import ExampleFormContactUs from './components/Forms/examples/ContactUs';
import ExampleFormRegistration from './components/Forms/examples/Registration';
import ExampleFormLogin from './components/Forms/examples/Login';

const mapStateToProps = state => ({
	appState: state.App,
});

function ComponentExample({appState, ...props}) {
	const displayPage = (page) => {
		switch(page){
			case 'Contact Us':
				return <ExampleFormContactUs />;
			default:
				return <ExampleFormLogin />;
		}
	}

 	return (
		<div>
			{displayPage(appState.page)}
		</div>
	);
}

export default connect(mapStateToProps, null)(ComponentExample);

