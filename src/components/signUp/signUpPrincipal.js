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
  const [institutionSymbol, setInstitutionSymbol] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [homeNumber, setHomeNumber] = useState("");
  const [experience, setExperience] = useState("");
  const [teachingCertificate, setTeachingCertificate] = useState("");
  const [minAge, setMinAge] = useState("");
  const [gender, setGender] = useState("");
  const [BJGraduate, setBJGraduate] = useState("");

  const toOption = (begin, end) => {
    const options = [];
    for (let i = begin; i <= end; i++) {
      options.push(i);
    }
    return options;
  };
  const require = ["נדרש", "לא נדרש"];
  const genderOptions = ["זכר", "נקבה" ];

  const handleSubmit = (event) => {
    event.preventDefault();
    //TODO: handle submit
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
      <h1>פרטי מוסד</h1>
      <ValidateTextField
        label="סמל מוסד"
        text={institutionSymbol}
        onChange={(value) => setInstitutionSymbol(value)}
        validate={() => {
          return institutionSymbol === "";
        }}
        errorMessage={"שדה חובה"}
      />
      <ValidateTextField
        label="שם מוסד"
        text={institutionName}
        onChange={(value) => setInstitutionName(value)}
        validate={() => {
          return institutionName === "";
        }}
        errorMessage={"שדה חובה"}
      />
      <h1> כתובת מוסד</h1>
      <ValidateTextField
        label="עיר"
        text={city}
        onChange={(value) => setCity(value)}
        validate={() => {
          return city === "";
        }}
        errorMessage={"שדה חובה"}
      />
      <ValidateTextField
        label="רחוב"
        text={street}
        onChange={(value) => setStreet(value)}
        validate={() => {
          return street === "";
        }}
        errorMessage={"שדה חובה"}
      />
      <ValidateTextField
        label="בית"
        text={homeNumber}
        onChange={(value) => setHomeNumber(value)}
        validate={() => {
          return homeNumber === "";
        }}
        errorMessage={"שדה חובה"}
      />
      <h1>דרישות מוסד</h1>
      <ValidateSelect
        label="שנות נסיון"
        options={toOption(0, 30)}
        onChange={(e) => setExperience(e)}
      />
      <ValidateSelect
        label="תעודת הוראה"
        options={require}
        onChange={(e) => setTeachingCertificate(e)}
      />
      <ValidateSelect
        label="גיל מינימלי"
        options={toOption(16, 40)}
        onChange={(e) => setMinAge(e)}
      />
      <ValidateSelect
        label="מין"
        options={genderOptions}
        onChange={(e) => setGender(e)}
      />
      <ValidateSelect
        label="בוגרת בית יעקב"
        options={require}
        onChange={(e) => setBJGraduate(e)}
      />
      <Button type="submit" variant="contained" color="primary">
        אישור
      </Button>
    </form>
  );
};

export default SignUpTeacher;
