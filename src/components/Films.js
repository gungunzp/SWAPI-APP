import React, { Component, Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getFilms, setPending } from '../store/actions';
import Menu from './Menu';
import Movie from './Movie';
import { JsonBlock } from './JsonBlock';
import smallImg from '../img/react_logo_small.jpg';

const mapStateToProps = state => ({
	films: state.films,
	pending: state.pending
});

const mapDispatchToProps = dispatch => ({
	getFilms: bindActionCreators(getFilms, dispatch),
	setPending: bindActionCreators(setPending, dispatch)
});

class Films extends Component {
	state = {
		page: 1
	};

	componentDidMount() {
		!this.props.films.length && this.props.getFilms(this.state.page);
	}

	componentWillUnmount() {
		this.props.pending && this.props.setPending(false);
	}

	render() {
		const { films } = this.props;
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
				<Menu />
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
				<JsonBlock json={films} />
			</Fragment>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Films);
