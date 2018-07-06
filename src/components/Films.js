import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import { get } from '../store/apiRequest';
import Menu from './Menu';
import Movie from './Movie';
import smallImg from '../img/react_logo_small.jpg';

export default class Starships extends Component {
	constructor() {
		super();
		this.state = {
			films: [],
			page: 1
		};
	}

	componentWillMount() {
		get(`films/?page=${this.state.page}`)
			// .then(response => response.json())
			// .then(data => data && data.results && data.results.length > 0 ?
			//   this.setState({
			//     films: data.results
			//   }) : [])
			.then(
				response =>
					response && response.results && response.results.length > 0
						? this.setState({ films: response.results })
						: []
			);
	}

	render() {
		const { films } = this.state;
		const {
			match: { url }
		} = this.props;
		console.log('films: ', films);
		console.log('url: ', url);
		return (
			<Fragment>
				<Link to="/" className="title">
					<img src={smallImg} alt="" style={{ maxWidth: 20 }} />
					bboilerplate
				</Link>
				<Menu/>
				<section className="container">
					<h2>films</h2>
					<ul>
						{films.length ? (
							films.map(item => (
								<li key={item[Object.keys(item)[0]]}>
									<Link to={`${url}/${item.episode_id}`}>
										{item[Object.keys(item)[0]]}
									</Link>
								</li>
							))
						) : (
							<div>Loading...</div>
						)}
					</ul>
					<Route path={`${url}/:movieId`} component={Movie} />
					<Route
						path={url}
						exact
						render={() => <h3>select the movie from the list</h3>}
					/>
				</section>
			</Fragment>
		);
	}
}
