import React, { useState, useEffect } from "react";
import { ListItem } from "@material-ui/core";
import Suggestion from "./suggestion";
import { List } from '@material-ui/core';
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

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

const LastSuggestions = () => {

    const suggestions = [
        { id: 1, teacher: "רייניץ", address: "מלכי ישראל 57", institution: "החדש" ,hours:
        [
            {id:1,date:new Date(),from:"10:30",to:"11:15",grade:"ב",proffesion:"מתמטיקה"},
            {id:2,date:new Date(),from:"11:30",to:"12:15",grade:"ח",proffesion:"יהדות"},
            {id:3,date:new Date(),from:"12:30",to:"13:15",grade:"ז",proffesion:"אנגלית"}
        ]},
        { id: 2, teacher: "גולדבלט", address: "מנחת יצחק 20", institution: "הישן" ,hours:
        [
            {id:1,date:new Date(),from:"10:30",to:"11:15",grade:"ב",proffesion:"מתמטיקה"},
            {id:2,date:new Date(),from:"11:30",to:"12:15",grade:"ח",proffesion:"יהדות"},
            {id:3,date:new Date(),from:"12:30",to:"13:15",grade:"ז",proffesion:"אנגלית"}
        ]},
        { id: 3, teacher: "רייניץ", address: "מלכי ישראל", institution: "הסניף" ,hours:
        [
            {id:1,date:new Date(),from:"10:30",to:"11:15",grade:"ב",proffesion:"מתמטיקה"},
            {id:2,date:new Date(),from:"11:30",to:"12:15",grade:"ח",proffesion:"יהדות"},
            {id:3,date:new Date(),from:"12:30",to:"13:15",grade:"ז",proffesion:"אנגלית"}
        ]}
    ]

    const [suggestionsArr, setSuggestionsArr] = useState(suggestions);

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell />
                        <TableCell align="right"><h2>מורה</h2></TableCell>
                        <TableCell align="right"><h2>כתובת</h2></TableCell>
                        <TableCell align="right"><h2>מוסד</h2></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {suggestionsArr.map((sug) => (
                        <Suggestion  suggestion={sug} />
                        //מה הסיפור????????????????
                        //איך משרשרים
                        //key={sug.id}
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default LastSuggestions;