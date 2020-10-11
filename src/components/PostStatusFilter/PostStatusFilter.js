//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PostStatusFilter = ({ filter, onFilterSelect }) => {
	const initialState = [
		{ name: 'all', label: 'Все' },
		{ name: 'like', label: 'Понравилось' },
	];

	const [buttons, setButtons] = useState(initialState);

	const buttonsGroup = buttons.map(({ name, label }) => {
		const clazz = filter === name ? 'btn-info' : 'btn-outline-secondary';

		return (
			<button
				key={name}
				type="button"
				className={`btn ${clazz}`}
				onClick={() => onFilterSelect(name)}
			>
				{label}
			</button>
		);
	});

	return <div className="btn-group">{buttonsGroup}</div>;
};

PostStatusFilter.propTypes = {
	filter: PropTypes.string.isRequired,
	onFilterSelect: PropTypes.func.isRequired,
};

export default PostStatusFilter;
