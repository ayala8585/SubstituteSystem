import React, { useState } from 'react';
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
import ClearIcon from '@material-ui/icons/Clear';




const TextOnlyList=(props)=>{

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
      
  
    
    const clearValue=(value)=>{
        let index=props.list.indexOf(value);
        props.setList(props.list.splice(index,1) );

        // alert(props.list)
        //why the list shows the cleared item instead of the rest items?
    }
    
    function genarateElement(){
        return props.list.map((value) =>
        React.cloneElement( 
            <ListItem>
                <ListItemText primary={value} />
                <div >
                    <ClearIcon onClick={()=>clearValue(value)}/>
                </div>
            </ListItem>, ),
      );
    }

    const classes = useStyles();
    const [dense, setDense] = React.useState(false);

return(
    <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              {genarateElement()}
            </List>
          </div>
        </Grid>
    </Grid>
)
}
export default TextOnlyList;

