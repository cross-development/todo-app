//Core
import React from 'react';
//Styles
import './AppHeader.css';

const AppHeader = ({ liked, allPosts }) => {
	return (
		<div className="app-header d-flex">
			<h1>Vitaliy Derda</h1>
			<h2>
				{allPosts} записей, из них понравилось {liked}
			</h2>
		</div>
	);
};

export default AppHeader;
