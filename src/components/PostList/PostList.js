//Core
import React from 'react';
import PropTypes from 'prop-types';
//Components
import PostListItem from '../PostListItem';
//Styles
import './PostList.css';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
	const elements = posts.map(({ id, ...post }) => (
		<li key={id} className="list-group-item">
			<PostListItem
				{...post}
				onDelete={() => onDelete(id)}
				onToggleLiked={() => onToggleLiked(id)}
				onToggleImportant={() => onToggleImportant(id)}
			/>
		</li>
	));

	return <ul className="app-list list-group">{elements}</ul>;
};

PostList.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			like: PropTypes.bool.isRequired,
			label: PropTypes.string.isRequired,
			important: PropTypes.bool.isRequired,
		}).isRequired,
	).isRequired,

	onDelete: PropTypes.func.isRequired,
	onToggleLiked: PropTypes.func.isRequired,
	onToggleImportant: PropTypes.func.isRequired,
};

export default PostList;
