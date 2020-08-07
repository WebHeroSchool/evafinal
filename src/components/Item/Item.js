import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';


class Item extends React.Component {
  componentDidMount() {
    setInterval( () => console.log('mounting'), 1000);
  }

  componentDidUpdate() {
    console.log('update');
  }

  componentWillUnmount() {
    console.log('unmounting');
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
};

export default Item;