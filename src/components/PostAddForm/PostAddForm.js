//Core
import React, { Component } from 'react';
//Styles
import './PostAddForm.css';

export default class PostAddForm extends Component {
	state = {
		value: '',
	};

	onChangeValue = ({ target: { value } }) => this.setState({ value });

	onSubmit = e => {
		e.preventDefault();

		this.props.onAdd(this.state.value);
		this.setState({ value: '' });
	};

	render() {
		const { value } = this.state;

		return (
			<form onSubmit={this.onSubmit} className="bottom-panel d-flex">
				<input
					type="text"
					value={value}
					onChange={this.onChangeValue}
					placeholder="О чем вы думаете сейчас?"
					className="form-control new-post-label"
				/>
				<button type="submit" className="btn btn-outline-secondary">
					Добавить
				</button>
			</form>
		);
	}
}
