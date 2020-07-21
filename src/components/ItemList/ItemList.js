import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const Checkboxes = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

const ItemList =({items}) => (<ul>
  {items.map(item =>
    <li className ={styles.list} key={item.value}>
    <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
    />
    <Item
        value={item.value}
        isDone={item.isDone}/>
    </li>)}
</ul>);

export default ItemList;