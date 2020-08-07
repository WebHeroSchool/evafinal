import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';


class Item extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const {value, isDone} = this.props;
    return (<span 
      className={
        classnames({
          [styles.item]: true,
          [styles.done]: isDone
        })
    }>
    {value}
    </span>);
  }
}

export default Item;