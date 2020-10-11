//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import './SearchPanel.css';

const SearchPanel = ({ value, onChangeFilter }) => (
	<input
		type="text"
		value={value}
		autoComplete="off"
		placeholder="Поиск по записям"
		className="form-control search-input"
		onChange={e => onChangeFilter(e.target.value)}
	/>
);

SearchPanel.propTypes = {
	value: PropTypes.string.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
};

export default SearchPanel;
