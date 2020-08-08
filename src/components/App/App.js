import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import styles from './App.module.css';

function App() {
  const [items, setItems] = useState([
      {
        value: 'Закончить React',
        isDone: true,
        id: 1
      },
      {
        value: 'Закончить портфолио',
        isDone: false,
        id: 2
      },
      {
        value: 'Найти работу',
        isDone: false,
        id: 3
      }
  ]);
  const [count, setCount] = useState(count: 3)
}
/*count: 3*/

const onClickDone = id => {
  const newItemList = items.map(item => {
    const newItem = { ...item};
    if (item.id ===id){
      newItem.isDone = !item.isDone;
    }
    return newItem;
  });

  this.setState({ items: newItemList });
};

const onClickDelete = id => {
  const newList = items.filter(item => item.id !== id);
  setItems(newList);
  setCount(count => count -1)
};

const onClickAdd = value => {
  const newItems = [
    ...items,
    {
      value,
      isDone: false,
      id: count + 1
    }
  ],
  setItems(newItems);
  setCount(count => count +1)
};

  return (
    <div className = {styles.wrap}>
      <h1 className = {styles.title}>Важные дела:</h1>
      <InputItem onClickAdd={onClickAdd}/>
      <ItemList
        items={items}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <Footer count={count}/>
    </div>);

export default App;
