import React, { Component } from 'react';
import { get } from '../store/apiRequest';

export default class Movie extends Component {
	state = {
		movie: {}
	};

	componentWillMount() {
		get(`films/${this.props.match.params.movieId}/`).then(response => this.setState({ movie: response }));
	}

	componentWillReceiveProps(nextProps) {
		get(`films/${nextProps.match.params.movieId}/`).then(response => this.setState({ movie: response }));
	}

	render() {
		const { movie } = this.state;
		const { movieId } = this.props.match.params;
		console.log('movie: ', movie);
		console.log('movie.url: ', movie && movie.url);
		return (
			<section>
				<h3>movieId: {movieId}</h3>
				{/*<ul>*/}
				{/*{films.length ? (*/}
				{/*films.map(item => (*/}
				{/*<li key={item[Object.keys(item)[0]]}>*/}
				{/*{item[Object.keys(item)[0]]}*/}
				{/*</li>*/}
				{/*))*/}
				{/*) : (*/}
				{/*<div>Loading...</div>*/}
				{/*)}*/}
				{/*</ul>*/}
			</section>
		);
	}
}
