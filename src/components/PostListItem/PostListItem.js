//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import './PostListItem.css';

const PostListItem = ({ like, label, important, onDelete, onToggleLiked, onToggleImportant }) => {
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
};

PostListItem.propTypes = {
	like: PropTypes.bool.isRequired,
	label: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
	important: PropTypes.bool.isRequired,
	onToggleLiked: PropTypes.func.isRequired,
	onToggleImportant: PropTypes.func.isRequired,
};

export default PostListItem;
