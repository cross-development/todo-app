//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Styles
import './PostAddForm.css';

const PostAddForm = ({ onAddItem }) => {
	const [value, setValue] = useState('');

	const onChangeValue = ({ target: { value } }) => setValue(value);

	const onSubmit = e => {
		e.preventDefault();

		onAddItem(value);
		setValue('');
	};

	return (
		<form onSubmit={onSubmit} className="bottom-panel d-flex">
			<input
				type="text"
				value={value}
				onChange={onChangeValue}
				placeholder="О чем вы думаете сейчас?"
				className="form-control new-post-label"
			/>
			<button type="submit" className="btn btn-outline-secondary">
				Добавить
			</button>
		</form>
	);
};

PostAddForm.propTypes = {
	onAddItem: PropTypes.func.isRequired,
};

export default PostAddForm;
