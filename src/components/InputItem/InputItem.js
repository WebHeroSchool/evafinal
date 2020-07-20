import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
    <TextField
        disabled
        id="outlined-disabled"
        label="Поле для ввода"
        defaultValue="Добавить дело"
        variant="outlined"
    />
  </div>);

export default InputItem;