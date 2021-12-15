
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';


const ValidateTextField = ({ validate, onChange,label,text,errorMessage }) => {
  const [value, setValue] = useState("");
  const [isValidateValue, setIsValidateValue] = useState(false);

  useEffect(() => {
    setIsValidateValue(validate());
  }, [value]);

  useEffect(() => {
    setIsValidateValue(false);
  }, []);

  const onValueChange = (value) => {
    onChange(value);
    setValue(value);
  };

  return (
    <>
      <label>{label}</label>
      <TextField
        error={isValidateValue}
        id="outlined-error-helper-text"
        label={isValidateValue && "Error"}
        defaultValue={text}
        helperText={isValidateValue && errorMessage}
        variant="outlined"
        value={text}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </>
  );
};


export default ValidateTextField;

