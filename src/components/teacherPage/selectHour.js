import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import * as startOfDay from "date-fns";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const SelectHour = (props) => {

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [subtractionDate, setSubtractionDate]=useState('');
  const [startOfClass, setStartOfClass]=useState("08:00");
  const [endOfClass, setEndOfClass]=useState("08:45");

  const addDate=()=>{
    // props.setSubtractionDate(subtractionDate);
    // props.setStartOfClass(startOfClass);
    // props.setEndOfClass(endOfClass);
    props.addToList(subtractionDate,startOfClass,endOfClass)
    props.setShowSelectHour(false);
  }

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  const classes = useStyles();


  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker 
          value={subtractionDate}
          onChange={(value)=>setSubtractionDate(value)}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="תאריך"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>


      <form className={classes.container} noValidate>
        <TextField
          onChange={(value)=>setEndOfClass(value)}
          id="time"
          label="עד"
          type="time"
          defaultValue="07:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />

        <TextField
          onChange={(value)=>setStartOfClass(value)}
          id="time"
          label="החל מ"
          type="time"
          defaultValue="07:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />

      </form>
          <Button variant="contained" color="primary" disableElevation onClick={addDate} >
            אישור
          </Button>

    </>
  )
}
export default SelectHour;






