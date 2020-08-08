import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import styles from './App.module.css';

import todo from '../todo/todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

const App = () =>
  (<Router>
    <div className = {styles.wrap}>
      <div className={styles.sidebar}>
        <MenuList>
          <Link to='/' className={styles.link}><MenuItem>About</MenuItem></Link>
          <Link to='/todo' className={styles.link}><MenuItem>To do</MenuItem></Link>
          <Link to='/contacts' className={styles.link}><MenuItem>Contacs</MenuItem></Link>
        </MenuList>
      </div>

      <div className={styles.content}>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={todo} />
        <Route path='/contacts' component={Contacts} />
      </div>
    </div>
  </Router>);


export default App;
