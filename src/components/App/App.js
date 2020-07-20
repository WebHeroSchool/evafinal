import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';

const todoItem = 'Закончить React';

const App = () => {
  const items = [
    {
      value: 'Закончить React'
    },
    {
      value: 'Закончить портфолио'
    },
    {
      value: 'Найти работу'
    }
  ];

  return (
  <div>
    <h1>Важные дела:</h1>
    <ItemList items={items}/>
    <Footer count={3}/>
  </div>);
};

export default App;