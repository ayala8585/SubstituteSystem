import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import {
  Grid,
  List,
  Avatar,
  Button,
  ListItem,
  TextField,
  Typography,
  IconButton,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { CalendarToday, Delete } from "@material-ui/icons";

import "../login/login.css";
import SelectHour from "./selectHour";

const SubtractionReport = () => {
  const [identity, setIdentity] = useState(0);
  const institutionsList = [
    //select the teachers institutions list from db
    { title: "The Kid", year: 1921 },
    { title: "Inglourious Basterds", year: 2009 },
    { title: "Snatch", year: 2000 },
    { title: "3 Idiots", year: 2009 },
    { title: "Monty Python and the Holy Grail", year: 1975 },
  ];

  const [dense, setDense] = useState(false);

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.title,
  });

  const deleteHour = (id) => {
    const newList = subtractionHoursList.filter((item) => item.id !== id);
    setSubtractionHoursList(newList);
  };

  //create useState and accept the value from SelectHour component
  const [subtractionHoursList, setSubtractionHoursList] = useState([]);

  let history = useHistory();

  const addHour = () => {
    console.log("kkk");
    history.push("/selectHour");
  };

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
    setIdentity(identity + 1);
    let hour = {
      id: identity,
      date: date,
      grade: grade,
      start: start,
      end: end,
      profession: profession,
    };
    setSubtractionHoursList([...subtractionHoursList, hour]);
  };

  const listItems = () => {
    return subtractionHoursList.map((hour) => (
      <ListItem key={hour.id}>
        <ListItemAvatar>
          <Avatar>
            <CalendarToday />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={hour.date.toLocaleDateString()}
          secondary={hour.grade}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => deleteHour(hour.id)}
          >
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ));
  };

  const selectDate = () => {
    return <SelectHour />;
  };

  return (
    <div>
      <div>
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
        renderInput={(params) => (
          <TextField {...params} label="מוסד לימודים" variant="outlined" />
        )}
      />

      <div>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">שעות חיסור</Typography>
          <div>
            <List dense={dense}>{listItems()}</List>
          </div>
        </Grid>
      </div>

      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={() => setShowSelectHour(true)}
      >
        הוספת שעת חיסור
      </Button>
      <br />
      {showSelectHour ? (
        <SelectHour
          addToList={addToList}
          setShowSelectHour={setShowSelectHour}
        />
      ) : null}
      {/* setSubtractionDate={setSubtractionDate} setStartOfClass={setStartOfClass} setEndOfClass={setEndOfClass} */}
      <br />
      {subtractionHoursList.length > 0 && !showSelectHour ? (
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={() => {}}
        >
          שליחת הבקשה
        </Button>
      ) : null}
      {/* post */}
    </div>
  );
};

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
