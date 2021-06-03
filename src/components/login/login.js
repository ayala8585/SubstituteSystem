
import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ValidateTextField from '../common/validateTextField';
import './login.css'
import Button from '@material-ui/core/Button';

const Login = () => {


  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

  const getUser = () => {
    fetch(`http://localhost:3000/login?userName=${userName}&password=${password}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log("error", err);
      });
  }

  return (
    <div className="login">
      <h3>התחברות</h3>
      <div className="div1">
        <label>שם משתמש</label>
        <ValidateTextField value={userName}
          onChange={(value) => setUserName(value)}
          validate={() => { return userName === '' }}
          errorMessage={'שדה חובה'} />
        <br />
        <label>סיסמה</label>
        <ValidateTextField value={password}
          onChange={(value) => setPassword(value)}
          validate={() => { return password === '' }}
          errorMessage={'שדה חובה'} />
      </div>
      <Button variant="contained" color="primary" disableElevation onClick={getUser}>
        כניסה
    </Button>


    </div>
  )
}


export default Login;














// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: 200,
//     },
//   },
// }));

// export default function ValidationTextFields() {
//   const classes = useStyles();
//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <div>
//         <TextField
//           error
//           id="outlined-error-helper-text"
//           label="name"
//           defaultValue="Hello World"
//           helperText="Incorrect entry."
//           variant="outlined"
//         />
//       </div>
//     </form>
//   );
// }