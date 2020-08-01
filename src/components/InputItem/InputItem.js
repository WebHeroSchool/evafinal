import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './InputItem.module.css';
import classnames from 'classnames';

class InputItem extends React.Component {
    state = {
        inputValue: '',
        error: false
    };

    onButtonClick = () => {
        if (this.state.inputValue !== '') {
            this.setState({
                inputValue: '',
                error:false
            });
            this.props.onClickAdd(this.state.inputValue);
            this.setState({inputValue:''});
        } else {
            this.setState(state => ({
            placeholder:'Incorrect entry',
            error: true,
          }));
        }
    };

    changeUppercase = event => {
        this.setState({ inputValue: event.target.value.toUpperCase()});
    };

    render () {
        const {onClickAdd} = this.props;

        return (
            <div 
                сlassName = {
                    classnames({
                        [styles.input]: true,
                        [styles.error]: this.state.error,
                    })
                }
            >
            <TextField
                error = {this.state.error}
                id="outlined-full-width"
                style={{ margin: 8 }}
                placeholder="Добавить дело"
                helperText="Just do it!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={this.state.inputValue}
                onChange={this.changeUppercase}
            />
            <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => this.onButtonClick()}
            >
            Добавить
            </Button>
          </div>);
    }
}


export default InputItem;