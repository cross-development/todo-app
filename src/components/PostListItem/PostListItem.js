//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Styles
import './PostListItem.css';

export default class PostListItem extends Component {
	static propTypes = {
		like: PropTypes.bool,
		label: PropTypes.string,
		important: PropTypes.bool,
		onDelete: PropTypes.func.isRequired,
		onToggleLiked: PropTypes.func.isRequired,
		onToggleImportant: PropTypes.func.isRequired,
	};

	static defaultProps = {
		label: '',
		important: false,
	};

	render() {
		const { label, important, like, onDelete, onToggleImportant, onToggleLiked } = this.props;

		let classNames = 'app-list-item d-flex justify-content-between';

		if (important) classNames += ' important';

		if (like) classNames += ' like';

		return (
			<div className={classNames}>
				<span onClick={onToggleLiked} className="app-list-item-label">
					{label}
				</span>

				<div className="d-flex justify-content-center align-content-center">
					<button type="button" onClick={onToggleImportant} className="btn-star btn-sm">
						<i className="fa fa-star"></i>
					</button>

					<button type="button" onClick={onDelete} className="btn-trash btn-sm">
						<i className="fa fa-trash-o"></i>
					</button>

					<i className="fa fa-heart"></i>
				</div>
			</div>
		);
	}
}
