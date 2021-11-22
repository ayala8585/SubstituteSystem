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
      <ValidateTextField
        label="מספר זהות"
        text={id}
        onChange={(value) => setId(value)}
        validate={() => {
          return id.length < 7;
        }}
        errorMessage={"שדה זה חייב להכיל מינינום 7 תווים"}
      />
      <ValidateTextField
        label="שם פרטי"
        text={firstName}
        onChange={(value) => setFirstName(value)}
        validate={() => {
          return firstName === "";
        }}
        errorMessage={"שדה חובה"}
      />
      <ValidateTextField
        labal="שם משפחה"
        text={lastName}
        onChange={(value) => setLastName(value)}
        validate={() => {
          return lastName === "";
        }}
        errorMessage={"שדה חובה"}
      />
      <ValidateTextField
        label="מייל"
        text={email}
        onChange={(value) => setEmail(value)}
        validate={() => {
          return email === "";
        }}
        errorMessage={"שדה חובה"}
      />
      <ValidateTextField
        label="טלפון"
        text={phone}
        onChange={(value) => setPhone(value)}
        validate={() => {
          return phone.length < 7;
        }}
        errorMessage={"שדה זה חייב להכיל מינימום 7 תווים"}
      />
      
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={addInstitution}
      >
        הוסף מוסד
      </Button>

      <Button variant="contained" color="primary" disableElevation>
        הרשמה
      </Button>
    </div>
  );
}


export default SignUpPrincipal;