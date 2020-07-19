import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';

const todoItem = 'Закончить React';

const App = () => (
	<div>
		<h1>Важные дела:</h1>
		<ItemList todoItem={todoItem}/>
		<Footer count={3}/>
	</div>);

	export default App;