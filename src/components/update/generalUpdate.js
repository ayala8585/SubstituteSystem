import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ValidateTextField from '../common/validateTextField';
import '../login/login.css'
import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";

const GeneralUpate=(props)=>{

    const [firstName, setFirstName] = useState(props.firstName);
    const [lastName, setLastName] = useState(props.lastName);
    const [email, setEmail] = useState(props.email);
    const [phone, setPhone] = useState(props.phone);

  

    return(
    <div>

        <h3>התחברות</h3>


<ValidateTextField text='שם פרטי'
  value={firstName}
  onChange={(value) => setFirstName(value)}
  validate={() => { return firstName === '' }}
  errorMessage={'שדה חובה'} />

<br />
<ValidateTextField text='שם משפחה'
  value={lastName}
  onChange={(value) => setLastName(value)}
  validate={() => { return lastName === '' }}
  errorMessage={'שדה חובה'} />

<br />
<ValidateTextField text='מייל'
  value={email}
  onChange={(value) => setEmail(value)}
  validate={() => { return email === '' }}
  errorMessage={'שדה חובה'} />

<br />
<ValidateTextField text='טלפון'
  value={phone}
  onChange={(value) => setPhone(value)}
  validate={() => { return phone.length < 7 }}
  errorMessage={'שדה זה חייב להכיל מינימום 7 תווים'} />
  <br/>
   <Button variant="contained" color="primary" disableElevation>אישור</Button>
</div>

    )
}
export default GeneralUpate;
