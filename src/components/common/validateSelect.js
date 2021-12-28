import React from "react";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

const ValidateSelect = ({ label, options, onChange }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <label>{label}</label>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select onChange={(event) => onChange(event.target.value)} native>
          {options.map((option) => (
            <option>{option}</option>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
export default ValidateSelect;
