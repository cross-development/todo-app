//Core
import React from 'react';
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

export default SearchPanel;
