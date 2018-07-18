import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Starships from './components/Starships';
import Films from './components/Films';
import Chat from './components/Chat/Chat';
import './scss/style.scss';

// TODO: pagination, fix routes on refresh, load more ships btn, break to components/containers with own css (app-flex-wrapper, json, list(props: search, pagination/feed ), replaceepisode_id by url.slice(url.indexOf('films/') + 'films//length')....

export default class App extends Component {
	render() {
		return (
			<Router>
				<main className="app-wrap">
          <Route path="/chat" component={Chat} />
          <Route path="/starships" component={Starships} />
					<Route path="/films" component={Films} />
					<Route exact path="/" component={Chat} />
				</main>
			</Router>
		);
	}
}