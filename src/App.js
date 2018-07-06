import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeFirstName, changeSecondName } from './store/actions';
import Starships from './components/Starships';
import Films from './components/Films';

// TODO: pagination, highlight letters on search(hoe it works in google), fix routes on refresh

const mapStateToProps = state => ({
  firstName: state.firstName,
  secondName: state.secondName
});

const mapDispatchToProps = dispatch => ({
  changeFirstName: bindActionCreators(changeFirstName, dispatch),
  changeSecondName: bindActionCreators(changeSecondName, dispatch)
});

class App extends Component {
	render() {
		const { changeFirstName, changeSecondName } = this.props;
		return (
			<Router>
				<Fragment>
					<input
						type="text"
						value={this.props.firstName}
						onChange={e => changeFirstName(e.target.value)}
					/>
					<input
						type="text"
						value={this.props.secondName}
						onChange={e => changeSecondName(e.target.value)}
					/>
					<Route path="/starships" component={Starships} />
					<Route path="/films" component={Films} />
					<Route exact path="/" component={Starships} />
				</Fragment>
			</Router>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
