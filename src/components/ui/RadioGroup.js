import React from "react";
import {
  Radio,
  FormLabel,
  FormControlLabel,
  RadioGroup as RadioG,
} from "@material-ui/core";

const RadioGroup = ({ label, options, ...otherProps }) => {
  return (
    <>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioG {...otherProps}>
        {options.map((opt) => (
          <FormControlLabel
            value={opt.value}
            control={<Radio color="primary" />}
            label={opt.label}
          />
        ))}
      </RadioG>
    </>
  );
};

export default RadioGroup;
