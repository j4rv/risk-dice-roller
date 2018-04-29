import React from 'react';
import {TextField} from 'material-ui';

export default ({title, value, inputChangeHandler}) => {
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
  />
};