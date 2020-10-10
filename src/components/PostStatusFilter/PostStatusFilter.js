//Core
import React, { Component } from 'react';
//Styles
import './PostStatusFilter.css';

export default class PostStatusFilter extends Component {
	state = {
		buttons: [
			{ name: 'all', label: 'Все' },
			{ name: 'like', label: 'Понравилось' },
		],
	};

	render() {
		const buttons = this.state.buttons.map(({ name, label }) => {
			const active = this.props.filter === name;
			const clazz = active ? 'btn-info' : 'btn-outline-secondary';

			return (
				<button
					key={name}
					type="button"
					className={`btn ${clazz}`}
					onClick={() => this.props.onFilterSelect(name)}
				>
					{label}
				</button>
			);
		});

		return <div className="btn-group">{buttons}</div>;
	}
}
