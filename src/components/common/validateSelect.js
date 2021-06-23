import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const ValidateSelect = (props) => {


  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
    <label>{props.text}</label>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select native >
          {props.option}
        </Select>
      </FormControl>
    </>
  )
}
export default ValidateSelect;