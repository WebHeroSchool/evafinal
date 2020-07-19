import React from 'react';
import Item from '../Item/Item';

const ItemList =({todoItem}) => (<ul>
	<li><Item todoItem={todoItem}/></li>
	<li><Item todoItem={'Закончить портфолио'}/></li>
	<li><Item todoItem={'Найти работу'}/></li>
</ul>);

export default ItemList;