import React, { useState } from "react";
import ValidateTextField from "../common/validateTextField";
import "../login/login.css";
import { makeStyles } from "@material-ui/core/styles";
import ValidateSelect from "../common/validateSelect";

const AddInstitution = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

  const [institutionSymbol, setInstitutionSymbol] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [institutionAddress, setInstitutionAddress] = useState("");
  const [experience, setExperience] = useState("");
  const [teachingCertificate, setTeachingCertificate] = useState("");
  const [minAge, setMinAge] = useState("");
  const [maleFemale, setMaleFemale] = useState("");
  const [BJGraduate, setBJGraduate] = useState("");
  const [picture, setPicture] = useState("");

  const toOption = (begin, end) => {
    const option = [];
    for (let i = begin; i <= end; i++) {
      option.push(<option>{i}</option>);
    }
    return option;
  };
  const require = [<option>נדרש</option>, <option>לא נדרש</option>];
  const gender = [<option>זכר</option>, <option>נקבה</option>];

  return (
    <div className="login">
      <h3>הוספת מוסד</h3>
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

      <ValidateTextField
        label="כתובת מוסד"
        text={institutionAddress}
        onChange={(value) => setInstitutionAddress(value)}
        validate={() => {
          return institutionAddress === "";
        }}
        errorMessage={"שדה חובה"}
      />

      <h3>דרישות מוסד</h3>

      <ValidateSelect label="שנות נסיון" option={toOption(0, 30)} />
      <ValidateSelect label="תעודת הוראה" option={require} />
      <ValidateSelect label="גיל מינימלי" option={toOption(16, 40)} />
      <ValidateSelect label="מין" option={gender} />
      <ValidateSelect label="בוגרת בית יעקב" option={require} />
      <ValidateSelect label="תמונה" option={require} />
    </div>
  );
};

export default AddInstitution;
