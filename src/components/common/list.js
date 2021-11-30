import React, { useState } from "react";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import ClearIcon from "@material-ui/icons/Clear";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";

import "./list.css";

const TextOnlyList = ({ list, setList, title }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

  const clearValue = (value) => {
    const newList = list.filter((item) => item !== value);
    setList(newList);
  };

  function genarateElement() {
    return list.map((value) =>
      React.cloneElement(
        <ListItem>
          <ListItemText primary={value} />
          <div>
            <ClearIcon className="cursor" Î onClick={() => clearValue(value)} />
          </div>
        </ListItem>
      )
    );
  }

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <div className={classes.demo}>
          <List>{genarateElement()}</List>
        </div>
      </Grid>
    </Grid>
  );
};
export default TextOnlyList;
