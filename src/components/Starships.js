import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getShips } from '../store/actions';
import Menu from './Menu';
import smallImg from '../img/react_logo_small.jpg';

const mapStateToProps = state => ({
  ships: state.ships,
  pending: state.pending
});

const mapDispatchToProps = dispatch => ({
  getShips: bindActionCreators(getShips, dispatch)
});

class Starships extends Component {
	constructor() {
		super();
		this.state = {
			starships: [],
			inputVal: '',
			page: 1
		};
	}

	componentDidMount() {
    this.props.getShips(this.state.page);
	}

  clickHandler = () => {
    this.setState({
      inputVal: ''
    });
  };

	inputHandler = e => {
		this.setState({
			inputVal: e.target.value
		});
	};

	render() {
		const { starships, inputVal } = this.state;
    const { ships, pending } = this.props;
    console.log('pending: ', pending);
		console.log('starships: ', starships);
		return (
			<Fragment>
				<Link to="/" className="title">
					<img src={smallImg} alt="" style={{ maxWidth: 20 }} />
					bboilerplate
				</Link>
				<Menu/>
				<section className="container">
					<h2>starships</h2>
					<form className="search-form">
						<input
							type="text"
							value={this.state.inputVal}
							onChange={this.inputHandler}
						/>
						<button type="button" onClick={this.clickHandler}>
							{this.state.inputVal ? 'clear input' : '<= type here'}
						</button>
					</form>
					<ul>
						{ships && ships.length ? (
              ships
								.filter(({ name }) =>
									name.toLowerCase().includes(inputVal.trim().toLowerCase())
								)
								.map(({ name }) => {
									if (inputVal.trim()) {
										let index = name
											.toLowerCase()
											.indexOf(inputVal.trim().toLowerCase());
										let arr = name
											.toLowerCase()
											.split(inputVal.trim().toLowerCase());
										return (
											<li key={name}>
												{arr.map((word, i) => (
													<Fragment key={`${i}-${word}`}>
														{i ? (
															<span className="marked">{inputVal.trim()}</span>
														) : null}
														{word}
													</Fragment>
												))}
											</li>
										);
									}
									return <li key={name}>{name}</li>;
								})
						) : (
              <div>{pending ? 'Loading...' : 'No ships found'}</div>
						)}
					</ul>
				</section>
			</Fragment>
		);
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Starships);
