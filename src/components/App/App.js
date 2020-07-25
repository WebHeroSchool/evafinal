import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    items: [
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
    ]
  };

onClickDone = id => {
  const newItemList = this.state.items.map(item => {
    const newItem = { ...item};
    if (item.id ===id){
      newItem.isDone = !item.isDone
    }

    return newItem;
  });

  this.setState({ items: newItemList });
};

  render() {
    return (
      <div className = {styles.wrap}>
        <h1 className = {styles.title}>Важные дела:</h1>
        <InputItem/>
        <ItemList items={this.state.items} onClickDone={this.onClickDone} />
        <Footer count={2}/>
      </div>);
  }
};

export default App;
