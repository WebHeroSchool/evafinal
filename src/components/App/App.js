import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MenuList from '@material-ui/core/MenuList';

import styles from './App.module.css';

import todo from '../todo/todo';
import About from '../About/About';
import Contacts from '../Contacs/Contacs';

function App = () =>
  (<Router>
    <div className = {styles.wrap}>
      <div className={styles.sidebar}>
        <MenuList>
          <Link to='/'><MenuItem>About</MenuItem></Link>
          <Link to='/todo'><MenuItem>To do</MenuItem></Link>
          <Link to='/contacts'><MenuItem>Contacs</MenuItem></Link>
        </MenuList>
      </div>

      <div className={styles.content}>
        <Route path='/' exact component={About} />
        <Route path='/todo' component={todo} />
        <Route path='/contacts' component={Contacs} />
      </div>
    </div>
  </Router>);


export default App;
