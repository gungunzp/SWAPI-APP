import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
	constructor() {
		super();
		this.state = {
			links: ['starships', 'films']
		};
	}

	render() {
		return (
			<nav className="nav">
				<ul className="nav__wrap">
					{this.state.links.map(link => (
						<li className="nav__wrap__item" key={link}>
							<Link to={link} className="nav__link">
								{link}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		);
	}
}
