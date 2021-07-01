import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import * as startOfDay from "date-fns";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import 'date-fns';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const SelectHour = (props) => {





  const [subtractionDate, setSubtractionDate] = useState(new Date());
  const [startOfClass, setStartOfClass] = useState("08:00");
  const [endOfClass, setEndOfClass] = useState("08:45");
  const [grade, setGrade] = useState('כיתה א');
  const [profession, setProfession] = useState('יהדות');

  const handleDateChange = (date) => {
    setSubtractionDate(date);
  };

  const addDate = () => {
    // props.setSubtractionDate(subtractionDate);
    // props.setStartOfClass(startOfClass);
    // props.setEndOfClass(endOfClass);
    props.addToList(subtractionDate, startOfClass, endOfClass, grade, profession)
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

  const options = () => {
    const options = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'יא', 'יב'];
    let optionHtml = [];
    options.map((option) => { optionHtml.push(<option>כיתה {option}</option>) });
    return (optionHtml);
  }

  const professions=()=>{
    //select from mongo
    return (['הסטוריה','אנגלית','חשבון','גאוגרפיה','התעמלות']);
  }

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          onChange={handleDateChange}
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="תאריך"
          value={subtractionDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>


      <form className={classes.container} noValidate>
        <TextField
          onChange={(value) => setEndOfClass(value)}
          id="time"
          label="עד"
          type="time"
          defaultValue="08:45"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />

        <TextField
          onChange={(value) => setStartOfClass(value)}
          id="time"
          label="החל מ"
          type="time"
          defaultValue="08:00"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />

        <FormControl variant="outlined" className={classes.formControl}>
          <Select native
            value={grade}
            onChange={(event) => setGrade(event.target.value) }>
            {options()}
          </Select>
        </FormControl>

        <Autocomplete
        value={profession}
        onSelect={(value)=>setProfession(value)}
        id="combo-box-demo"
        options={professions()}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label='מקצוע' variant="outlined" />}
      />


      </form>
      <Button variant="contained" color="primary" disableElevation onClick={addDate} >
        אישור
          </Button>

    </>
  )
}
export default SelectHour;



