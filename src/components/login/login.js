
import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import ValidateTextField from '../common/validateTextField';
import './login.css'

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

  return (
      <div className="login"> 
      <h3>התחברות</h3>

      <div>שם משתמש</div>
      <ValidateTextField value={userName}
        onChange={(value) => setUserName(value)}
        validate={() => { return userName==='' }}
        errorMessage={'שדה חובה'} />
<br/>
      <div>סיסמה</div>
      <ValidateTextField value={password}
        onChange={(value) => setPassword(value)}
        validate={() => { return password==='' }}
        errorMessage={'שדה חובה'} />
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