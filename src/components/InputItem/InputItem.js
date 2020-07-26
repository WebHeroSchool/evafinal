import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
    <Button variant="contained" color="secondary">
    Добавить
    </Button>
  </div>);

export default InputItem;