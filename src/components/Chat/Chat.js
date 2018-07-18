import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
import smallImg from '../../img/react_logo_small.jpg';
import './Chat.scss';

export default class Chat extends Component {
	state = {
	  grouped: true,
		messages: [
			{
				id: '11',
				author: 'noname',
				text: 'Hi there!'
			},
			{
				id: '22',
				author: 'unknown',
				text: 'Wassap'
			},
			{
				id: '33',
				author: 'infamous',
				text: 'hello guys!'
			},
			{
				id: '44',
				author: 'anonymous',
				text: 'hey :)'
			}
		]
	};

	componentDidMount() {}

	componentWillUnmount() {}

  componentDidUpdate(prevProps, prevState) {
    if (this.state.messages.length !== prevState.messages.length) {
      this.scrollTo(0, this.last);
    }
  }

  scrollTo = (coord, el) => {
    console.log('scroll: ');
    // window.scroll({top: 0, behavior: 'smooth'});
    el.scrollIntoView({block: 'start', behavior: 'smooth'});
  };

	send = e => {
		e.preventDefault();
		let elems = Array.prototype.slice.call(e.target.elements);
		const getValue = name => elems.find(el => el.name === name).value;
		let message = {
			id: Date.now(),
			author: getValue('author'),
			text: getValue('text')
		};
		let arr = this.state.messages.slice();
		arr.push(message);
		this.setState({ messages: arr });
	};

	render() {
		const { messages, grouped } = this.state;
		console.log('messages: ', messages);
		return (
			<Fragment>
				<Link to="/" className="title">
					<img src={smallImg} alt="" style={{ maxWidth: 20 }} />
					bboilerplate
				</Link>
				<Menu />
				<section className="container">
					<form onSubmit={this.send} className="sender">
						<label className="sender__group">
							<span className="sender__label">Author:</span>
							<input
								className="sender__content"
								type="text"
								name="author"
								value="bot"
							/>
						</label>
						<label className="sender__group">
							<span className="sender__label">Text:</span>
							<textarea
								className="sender__content"
								type="text"
								name="text"
								value="test"
							/>
						</label>
						<button>send</button>
					</form>
					<h2>Chat</h2>
					<ul className="chat">
						{messages.map(({ id, author, text }) => (
							<li key={id} className="chat__message" ref={node => this.last = node}>
								<span className={`chat__message__avatar${grouped ? ' chat__message__avatar--hidden' : ''}`}>
									{author && author.slice(0, 1).toUpperCase()}
								</span>
								<span className="chat__message__inner">
									<span className="chat__message__author">{author}</span>
									<span className="chat__message__text">{text}</span>
								</span>
							</li>
						))}
					</ul>
				</section>
			</Fragment>
		);
	}
}
