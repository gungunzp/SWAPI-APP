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
	state = {
		caseSensitive: false,
		inputVal: '',
		page: 1
	};

	componentDidMount() {
		this.props.getShips(this.state.page);
	}

	arrayOfEntries = (str, query, caseSensitive) => {
		if (
			!query ||
			!str ||
			!query.trim() ||
			!str.trim() ||
			(caseSensitive
				? !str.includes(query)
				: !str.toLowerCase().includes(query.toLowerCase()))
		) {
			return [str || ''];
		}
		let arr = [];
		for (let i = 0; i < str.length; i++) {
			// console.log(i);
			let index = caseSensitive
				? str.indexOf(query)
				: str.toLowerCase().indexOf(query.toLowerCase());
			if (index !== -1) {
				arr.push([str.slice(0, index), str.slice(index, index + query.length)]);
				str = str.slice(index + query.length);
			} else {
				break;
			}
		}
		str && arr.push([str]);
		// console.log(str);
		return arr;
	};

	render() {
	  const jsonBlock = json => <pre className="json">{json && !!json.length ? JSON.stringify(json, null, 2) : 'No data'}</pre>;
		const { inputVal, caseSensitive } = this.state;
		const { ships, pending } = this.props;
		let filteredShips = ships.filter(
			({ name }) =>
				caseSensitive
					? name.includes(inputVal.trim())
					: name.toLowerCase().includes(inputVal.trim().toLowerCase())
		);
    console.log('filteredShips: ', filteredShips);
		return (
			<Fragment>
				<Link to="/" className="title">
					<img src={smallImg} alt="" style={{ maxWidth: 20 }} />
					bboilerplate
				</Link>
				<Menu />
				<section className="container">
					<h2>starships</h2>
					<form className="search-form">
						<span className="input-wrap">
							<input
                autoFocus
								type="text"
								value={this.state.inputVal}
								onChange={e => this.setState({ inputVal: e.target.value })}
							/>
              {this.state.inputVal && <span
								className="input-wrap__clear"
								onClick={() => this.setState({ inputVal: '' })}
							>X</span>}
						</span>
						<button
							type="button"
							onClick={() =>
								this.setState({ caseSensitive: !this.state.caseSensitive })
							}
						>
							{caseSensitive ? 'case Sensitive' : 'ignore case'}
						</button>
					</form>
					<ul>
						{filteredShips && filteredShips.length ? (
							filteredShips.map(({ name }) => {
								const arr = this.arrayOfEntries(name, inputVal, caseSensitive);
								// console.log('arr: ', arr);
								// console.log('caseSensitive: ', caseSensitive);
								return (
									<li key={name}>
										{arr.length > 1
											? arr.map(
													(pair, i) =>
														pair[1] ? (
															<Fragment key={`${i}-${pair[0]}`}>
																{pair[0]}
																<span className="marked">{pair[1]}</span>
															</Fragment>
														) : (
															pair[0]
														)
											  )
											: arr[0]}
									</li>
								);
							})
						) : (
							<div>{pending ? 'Loading...' : 'No ships found'}</div>
						)}
					</ul>
				</section>
        {jsonBlock(filteredShips)}
			</Fragment>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Starships);
