import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Suggestion = ({ key, suggestion }) => {

    const useSugStyles = makeStyles({
        root: {
            '& > *': {
                borderBottom: 'unset',
            },
        },
    });

    const [open, setOpen] = React.useState(false);
    const [interested, setInterested] = useState(false);
    const classes = useSugStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="right">
                    <Button variant="contained" onClick={()=>setInterested(!interested)}>{interested?'ביטול':'אני מעוניין'}</Button>
                </TableCell>
                <TableCell align="right" component="th" scope="row">{suggestion.teacher}</TableCell>
                <TableCell align="right">{suggestion.address}</TableCell>
                <TableCell align="right">{suggestion.institution}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography align="right" variant="h6" gutterBottom component="div">
                                שעות
                </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="right">מקצוע</TableCell>
                                        <TableCell align="right">כיתה</TableCell>
                                        <TableCell align="right">עד</TableCell>
                                        <TableCell align="right">מ</TableCell>
                                        <TableCell align="right">תאריך</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {suggestion.hours.map((hour) => (
                                        <TableRow key={hour.id}>
                                            <TableCell align="right" component="th" scope="row">{hour.proffesion}</TableCell>
                                            <TableCell align="right">{hour.grade}</TableCell>
                                            <TableCell align="right">{hour.to}</TableCell>
                                            <TableCell align="right">{hour.from}</TableCell>
                                            <TableCell align="right">{hour.date.toLocaleString()}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}

export default Suggestion;