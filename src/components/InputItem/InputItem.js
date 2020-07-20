import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
    <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          variant="outlined"
        />
  </div>)

export default InputItem;