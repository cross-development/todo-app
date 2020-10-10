//Core
import React from 'react';
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

export default PostList;
