
import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { TextValidator } from 'react-material-ui-form-validator';

const Login=()=>{
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(event) {
    const tmp = event.target.value;
    
    switch (event.target.name) {
    case 'userName': setUserName(tmp); break;
    case 'password': setPassword(tmp); break;
    default:
    break;
    }
    }



  return (
  <Container>
  <h3>התחברות</h3>
    <label>שם משתמש</label>
    <TextValidator id="userName" label="שם משתמש" onChange={handleChange} name="userName" value={userName} validators={'required'} errorMessages={'this field is required'} />

  </Container>
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