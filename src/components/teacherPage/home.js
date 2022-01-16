import React from "react";
import SubtractionHistory from "./subtractionHistory";
import SetDetails from "./setDetails";
import SubtractionReport from "./subtractionReport";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { CalendarToday, History, PersonPin } from "@material-ui/icons";
import { Box, Typography, Tab, Tabs, AppBar } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab
            icon={<CalendarToday />}
            aria-label="phone"
            {...a11yProps(0)}
          />
          <Tab icon={<History />} aria-label="favorite" {...a11yProps(1)} />
          <Tab icon={<PersonPin />} aria-label="person" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SubtractionReport />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SubtractionHistory />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SetDetails />
      </TabPanel>
    </div>
  );
}
