import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';
import styles from './App.module.css';

const todoItem = 'Закончить React';

const App = () => {
  const items = [
    {
      value: 'Закончить React',
      isDone: true
    },
    {
      value: 'Закончить портфолио',
      isDone: false
    },
    {
      value: 'Найти работу',
      isDone: true
    }
  ];

  return (
  <div className = {styles.wrap}>
    <h1 className = {styles.title}>Важные дела:</h1>
    <ItemList items={items}/>
    <Footer count={3}/>
  </div>);
};

export default App;