import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';

const InputItem = () => (
    <div сlassName = {styles.input} >
    <TextField
        id="outlined-full-width"
        label="Дело"
        style={{ margin: 8 }}
        placeholder="Добавить дело"
        helperText="Just do it!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
    />
  </div>);

export default InputItem;