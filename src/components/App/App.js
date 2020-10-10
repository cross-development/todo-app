//Core
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
//Components
import PostList from '../PostList';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import PostAddForm from '../PostAddForm';
import PostStatusFilter from '../PostStatusFilter';
//Styles
import './App.css';

export default class App extends Component {
	state = {
		data: [],
		term: '',
		filter: 'all',
	};

	addItem = body => {
		const newItem = {
			id: uuidv4(),
			label: body,
			like: false,
			important: false,
		};

		this.setState(({ data }) => ({ data: [...data, newItem] }));
	};

	deleteItem = itemId => {
		this.setState(({ data }) => ({ data: data.filter(({ id }) => id !== itemId) }));
	};

	onToggleLiked = itemId => {
		this.setState(({ data }) => ({
			data: data.map(item => (item.id === itemId ? { ...item, like: !item.like } : item)),
		}));
	};

	onToggleImportant = itemId => {
		this.setState(({ data }) => ({
			data: data.map(item => (item.id === itemId ? { ...item, important: !item.important } : item)),
		}));
	};

	onSearchPost = term => this.setState({ term });

	onFilterSelect = filter => this.setState({ filter });

	onFilterPost = (items, filter) => {
		if (filter === 'like') {
			return items.filter(item => item.like);
		} else {
			return items;
		}
	};

	getVisiblePosts = () => {
		const { data, filter } = this.state;

		return data.filter(({ label }) => label.toLowerCase().includes(filter.toLowerCase()));
	};

	render() {
		const { data, term, filter } = this.state;

		const allPosts = data.length;
		const liked = data.filter(item => item.like).length;

		const visiblePosts = this.getVisiblePosts();

		return (
			<div className="app">
				<AppHeader liked={liked} allPosts={allPosts} />

				<div className="search-panel d-flex">
					<SearchPanel value={term} onChangeFilter={this.onSearchPost} />

					<PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect} />
				</div>

				<PostList
					posts={visiblePosts}
					onDelete={this.deleteItem}
					onToggleLiked={this.onToggleLiked}
					onToggleImportant={this.onToggleImportant}
				/>

				<PostAddForm onAdd={this.addItem} />
			</div>
		);
	}
}
