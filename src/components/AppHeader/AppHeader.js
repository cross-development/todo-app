//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import './AppHeader.css';

const AppHeader = ({ liked, allPosts }) => (
	<div className="app-header d-flex">
		<h1>Vitaliy Derda</h1>
		<h2>
			{allPosts} записей, из них понравилось {liked}
		</h2>
	</div>
);

AppHeader.propTypes = {
	liked: PropTypes.number.isRequired,
	allPosts: PropTypes.number.isRequired,
};

export default AppHeader;
