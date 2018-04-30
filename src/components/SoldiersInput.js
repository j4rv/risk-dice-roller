import React from 'react';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  textField: {
    margin: theme.spacing.unit,
    width: 128,
  }
});

export default withStyles(styles)(
  ({title, value, inputChangeHandler, classes}) => {
    const handleChange = event => {
      const value = event.target.value;
      inputChangeHandler(value);
    }
    return <TextField 
      id={title} 
      label={title} 
      value={value}
      required 
      error={value === ""}
      onChange={handleChange}
      className={classes.textField}
    />
  }
);