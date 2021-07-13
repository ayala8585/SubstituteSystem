import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ValidateTextField from '../common/validateTextField';
import '../login/login.css'
import { useHistory } from "react-router-dom"
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import SubstituteDetails from "./substituteDetails"
// import '../signUp/addInstitutionTeacher'


const GeneralSignUp = (props) => {
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  let history = useHistory();

  const addInstitution = () => {
    history.push('/addInstitution');
  }

  const addInstitutionTeacher = () => {
    history.push('/addInstitutionTeacher');
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

      <ValidateTextField text='מספר זהות'
        value={id}
        onChange={(value) => setId(value)}
        validate={() => { return id.length < 7 }}
        errorMessage={'שדה זה חייב להכיל מינינום 7 תווים'} />
      <br />
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


      {props.type === 1 ?
        <Button variant="contained" color="primary" disableElevation onClick={addInstitution} >
          הוסף מוסד
    </Button> : null}

      {props.type === 2 ?
        <Button variant="contained" color="primary" disableElevation onClick={addInstitutionTeacher} >
          הוסף מוסד
    </Button> : null}


      {
        props.type === 3 ? <SubstituteDetails></SubstituteDetails> : null}




      <Button variant="contained" color="primary" disableElevation>
        אישור
    </Button>

    </div>

  )
}

const mapStateToProps = ({ user }) => {
  return {
    type: user.type,
  };

};

export default connect(mapStateToProps, {})(GeneralSignUp);







