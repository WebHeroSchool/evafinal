import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const ItemList =({items}) => (<ul>
  {items.map(item =>
    <li className ={styles.list} key={item.value}>
    <Checkbox />
    <Item
        value={item.value}
        isDone={item.isDone}/>
      <DeleteRoundedIcon />
    </li>)}
</ul>);

export default ItemList;