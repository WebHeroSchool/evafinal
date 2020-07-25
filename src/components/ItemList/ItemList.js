import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

const ItemList =({items, isDone, onClickDone}) => (<ul>
  {items.map(item =>
    <li className ={styles.list} key={item.value}>
    <div className = {styles.check}>
    <Checkbox
      checked={item.isDone}
      tabIndex={-1}
      onClick={() => onClickDone(item.id)}
      />
        </div>
        <Item
            value={item.value}
            isDone={item.isDone}
            id = {item.id}
            />
        <div className ={styles.delete}>
    <DeleteTwoToneIcon />
    </div>
    </li>)}
</ul>);

export default ItemList;