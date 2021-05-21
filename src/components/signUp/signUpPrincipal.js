import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ValidateTextField from '../common/validateTextField';
import '../login/login.css'
import {useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button';

const SignUpPrincipal = () => {


  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  let history=useHistory();

const addInstitution=()=>{
    history.push('/addInstitution');
}


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

      <div>מספר זהות</div>
      <ValidateTextField value={id}
        onChange={(value) => setId(value)}
        validate={() => { return id.length<7 }}
        errorMessage={'שדה זה חייב להכיל מינינום 7 תווים'} />
<br/>
      <div>שם פרטי</div>
      <ValidateTextField value={firstName}
        onChange={(value) => setFirstName(value)}
        validate={() => { return firstName==='' }}
        errorMessage={'שדה חובה'} />

<br/>
      <div>שם משפחה</div>
      <ValidateTextField value={lastName}
        onChange={(value) => setLastName(value)}
        validate={() => { return lastName==='' }}
        errorMessage={'שדה חובה'} />

<br/>
      <div>מייל</div>
      <ValidateTextField value={email}
        onChange={(value) => setEmail(value)}
        validate={() => { return email==='' }}
        errorMessage={'שדה חובה'} />

<br/>
      <div>טלפון</div>
      <ValidateTextField value={phone}
        onChange={(value) => setPhone(value)}
        validate={() => { return phone.length<7 }}
        errorMessage={'שדה זה חייב להכיל מינימום 7 תווים'} />


    <Button variant="contained" color="primary" disableElevation onClick={addInstitution}>
                הוסף מוסד
    </Button>

    <Button variant="contained" color="primary" disableElevation>
                הרשמה
    </Button>

      </div>
      
  )
}


export default SignUpPrincipal;