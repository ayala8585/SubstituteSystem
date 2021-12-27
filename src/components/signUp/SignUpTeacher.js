import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import "./signUpTeacher.css";
import ValidateSelect from "../common/validateSelect";
import ValidateTextField from "../common/validateTextField";

const SignUpTeacher = () => {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isInstitutionPanelOpen, setIsInstitutionPanelOpen] = useState(false);
  const [institutions, setInstitutions] = useState([]);

  const institutionsList = ["a", "b", "c"];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const body = {
      id,
      firstName,
      lastName,
      email,
      phone,
      password,
    };
    console.log("body", body);
    const result = await fetch("http://localhost:5000/teacher", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        firstName,
        lastName,
        email,
        phone,
        password,
      }),
    });
    console.log("result: ", result);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h3>רישום</h3>

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
        label="שם משפחה"
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
      <ValidateTextField
        label="סיסמה לכניסות הבאות"
        text={password}
        onChange={(value) => setPassword(value)}
        validate={() => {
          return password.length < 6;
        }}
        errorMessage={"אורך הסיסמה מינימום 6 תווים"}
      />
      <Button type="submit" variant="contained" color="primary">
        אישור
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsInstitutionPanelOpen(true)}
      >
        הוסף מוסד
      </Button>
      {isInstitutionPanelOpen && (
        <>
          <ValidateSelect
            label="בחר סמל מוסד"
            options={institutionsList}
            onChange={(e) => setInstitutions((prev) => [...prev, e])}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsInstitutionPanelOpen(false)}
          >
            שמור
          </Button>
        </>
      )}
    </form>
  );
};

export default SignUpTeacher;