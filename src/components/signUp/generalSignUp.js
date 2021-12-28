import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "../login/login.css";
import { UserContext } from "../../general/UserContext";
import SubstituteDetails from "./substituteDetails";
import ValidateTextField from "../common/validateTextField";

const GeneralSignUp = (props) => {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { userType } = useContext(UserContext);

  let history = useHistory();

  const addInstitution = () => {
    history.push("/addInstitution");
  };

  const addInstitutionTeacher = () => {
    history.push("/addInstitutionTeacher");
  };

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
      <br />
      <ValidateTextField
        label="שם פרטי"
        text={firstName}
        onChange={(value) => setFirstName(value)}
        validate={() => {
          return firstName === "";
        }}
        errorMessage={"שדה חובה"}
      />

      <br />
      <ValidateTextField
        label="שם משפחה"
        text={lastName}
        onChange={(value) => setLastName(value)}
        validate={() => {
          return lastName === "";
        }}
        errorMessage={"שדה חובה"}
      />

      <br />
      <ValidateTextField
        label="מייל"
        text={email}
        onChange={(value) => setEmail(value)}
        validate={() => {
          return email === "";
        }}
        errorMessage={"שדה חובה"}
      />

      <br />
      <ValidateTextField
        label="טלפון"
        text={phone}
        onChange={(value) => setPhone(value)}
        validate={() => {
          return phone.length < 7;
        }}
        errorMessage={"שדה זה חייב להכיל מינימום 7 תווים"}
      />

      {userType === 1 ? (
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={addInstitution}
        >
          הוסף מוסד
        </Button>
      ) : null}

      {userType === 2 ? (
        <Button
          variant="contained"
          color="primary"
          disableElevation
          onClick={addInstitutionTeacher}
        >
          הוסף מוסד
        </Button>
      ) : null}

      {userType === 3 ? <SubstituteDetails /> : null}

      <Button variant="contained" color="primary" disableElevation>
        אישור
      </Button>
    </div>
  );
};

export default GeneralSignUp;
