import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Starships from './components/Starships';
import Films from './components/Films';

// TODO: pagination, fix routes on refresh, load more ships btn, break to components with own css (app-flex-wrapper, json, list(props: search, pagination/feed ), json component: add before/after shadow gradient

export default class App extends Component {
	render() {
		return (
			<Router>
				<main className="app-wrap">
					<Route path="/starships" component={Starships} />
					<Route path="/films" component={Films} />
					<Route exact path="/" component={Starships} />
				</main>
			</Router>
		);
	}
}