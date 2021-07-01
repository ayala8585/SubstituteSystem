import React, { useState, useEffect } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SelectHour from './selectHour'
import { useHistory } from "react-router-dom"
import '../login/login.css'



const SubtractionReport = () => {

  const [identity, setIdentity] =useState(0);
  const institutionsList = [//select the teachers institutions list from db
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];

  // const useStyles = makeStyles((theme) => ({
  //     root: {
  //       display: 'flex',
  //       flexWrap: 'wrap',
  //     },
  //     textField: {
  //       marginLeft: theme.spacing(1),
  //       marginRight: theme.spacing(1),
  //       width: '25ch',
  //     },
  //   }));

  //   const classes = useStyles();

  // const classes = useStyles();

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);


  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
  });

  const deleteHour = (id) => {
    const newList = subtractionHoursList.filter((item) => item.id !== id);
    setSubtractionHoursList(newList);
  }

  //create useState and accept the value from SelectHour component
  const [subtractionHoursList, setSubtractionHoursList] = useState([]);

  let history = useHistory();

  const addHoure = () => {
    console.log("kkk")
    history.push('/selectHour');
  }

  const [showSelectHour, setShowSelectHour] = useState(false);

  // const [subtractionDate, setSubtractionDate]=useState();
  // const [startOfClass, setStartOfClass]=useState();
  // const [endOfClass, setEndOfClass]=useState();

  // const addToList=(date,start,end) => {
  //   setSubtractionDate(date);
  //   setStartOfClass(start);
  //   setEndOfClass(end);
  //   let hour={date:subtractionDate,
  //     grade:'a' }
  //   setSubtractionHoursList([...subtractionHoursList,hour])
  // }

  const addToList = (date, start, end, grade, profession) => {
    // setSubtractionDate(date);
    // setStartOfClass(start);
    // setEndOfClass(end);
    setIdentity(identity+1);
    let hour = {
      id: identity,
      date: date,
      grade: grade,
      start: start,
      end: end,
      profession: profession
    }
    setSubtractionHoursList([...subtractionHoursList, hour])
  }


  const listItems = () => {
    return (subtractionHoursList.map(hour =>
      <ListItem key={hour.id}>
        <ListItemAvatar>
          <Avatar>
            <CalendarTodayIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={hour.date.toLocaleDateString()}
          secondary={hour.grade}
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => deleteHour(hour.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))
  };

  const selectDate = () => {
    return <SelectHour />
  }


  return (
    <div>
      <div >
        <TextField
          id="outlined-full-width"
          label="פרוט הבקשה"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>

      <Autocomplete
        id="filter-demo"
        options={institutionsList}
        getOptionLabel={(option) => option.title}
        filterOptions={filterOptions}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="מוסד לימודים" variant="outlined" />}
      />


      <div>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" >
            שעות חיסור
          </Typography>
          <div>
            <List dense={dense}>
              {listItems()}
            </List>
          </div>
        </Grid>
      </div>


      <Button variant="contained" color="primary" disableElevation onClick={() => setShowSelectHour(true)}>
        הוספת שעת חיסור
          </Button>
      <br />
      {showSelectHour ? <SelectHour addToList={addToList}  setShowSelectHour={setShowSelectHour}/> : null}
      {/* setSubtractionDate={setSubtractionDate} setStartOfClass={setStartOfClass} setEndOfClass={setEndOfClass} */}
      <br />
      {(subtractionHoursList.length>0 && !showSelectHour) ?<Button variant="contained" color="primary" disableElevation onClick={() =>{}}>
        שליחת הבקשה
          </Button>:null}
          {/* post */}
        </div>
  );

}

export default SubtractionReport;












// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     maxWidth: 752,
//   },
//   demo: {
//     backgroundColor: theme.palette.background.paper,
//   },
//   title: {
//     margin: theme.spacing(4, 0, 2),
//   },
// }));


