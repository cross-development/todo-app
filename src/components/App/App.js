//Core
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
//Components
import PostList from '../PostList';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import PostAddForm from '../PostAddForm';
import PostStatusFilter from '../PostStatusFilter';
//Styles
import './App.css';
const App = () => {
	const [data, setData] = useState([]);
	const [term, setTerm] = useState('');
	const [filter, setFilter] = useState('all');

	const addItem = body => {
		const newItem = {
			id: uuidv4(),
			label: body,
			like: false,
			important: false,
		};

		setData([...data, newItem]);
	};

	const deleteItem = itemId => setData(data.filter(({ id }) => id !== itemId));

	const onToggleLiked = itemId =>
		setData(data.map(item => (item.id === itemId ? { ...item, like: !item.like } : item)));

	const onToggleImportant = itemId =>
		setData(
			data.map(item => (item.id === itemId ? { ...item, important: !item.important } : item)),
		);

	const onSearchPost = term => setTerm(term);

	const onFilterSelect = filter => setFilter(filter);

	const onFilterPost = (items, filter) => {
		if (filter === 'like') {
			return items.filter(item => item.like);
		} else {
			return items;
		}
	};

	const getVisiblePosts = () =>
		data.filter(({ label }) => label.toLowerCase().includes(term.toLowerCase()));

	const allPosts = data.length;
	const liked = data.filter(item => item.like).length;
	const visiblePosts = onFilterPost(getVisiblePosts(), filter);

	return (
		<div className="app">
			<AppHeader liked={liked} allPosts={allPosts} />

			<div className="search-panel d-flex">
				<SearchPanel value={term} onChangeFilter={onSearchPost} />

				<PostStatusFilter filter={filter} onFilterSelect={onFilterSelect} />
			</div>

			<PostList
				posts={visiblePosts}
				onDelete={deleteItem}
				onToggleLiked={onToggleLiked}
				onToggleImportant={onToggleImportant}
			/>

			<PostAddForm onAddItem={addItem} />
		</div>
	);
};

export default App;
