import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Checkbox, Button, TextField, FormControlLabel } from "@material-ui/core";
import "./signUpTeacher.css";
import ValidateSelect from "../common/validateSelect";
import { RadioGroup } from "../ui";


const genderOptions = [
  { label: "זכר", value: "male" },
  { label: "נקבה", value: "female" },
];

const onSubmit = async (values) => {
  const result = await fetch("http://localhost:5000/substitute", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  console.log("result: ", result);
};

const institutionsList = ["a", "b", "c"];


const validationSchema = yup.object({
  id: yup
    .string()
    .required("שדה חובה")
    .matches(/^\d+$/, "תעודת זהות מכילה ספרות בלבד")
    .min(7, "שדה זה חייב להכיל מינינום 7 תווים"),
  email: yup.string().required("שדה חובה").email("כתובת מייל לא חוקית"),

  phone: yup
    .string()
    .required("שדה חובה")
    .matches(/^\d+$/, "מספר טלפון מכיל ספרות בלבד")
    .min(7, "שדה זה חייב להכיל מינינום 7 תווים"),
  lastName: yup.string().required("שדה חובה"),

  password: yup
    .string()
    .required("שדה חובה")
    .min(6, "שדה זה חייב להכיל מינינום 6 תווים"),
  firstName: yup.string().required("שדה חובה"),

  isBjGraduate: yup
    .string()
    .required("שדה חובה"),

    phone: yup
    .string()
    .required("שדה חובה")
    .matches(/^\d+$/, "מספר טלפון מכיל ספרות בלבד")
    .min(7, "שדה זה חייב להכיל מינינום 7 תווים"),
  professions: yup.string().required("שדה חובה"),
});


const SignUpSubstitute = () => {
  const [isInstitutionPanelOpen, setIsInstitutionPanelOpen] = useState(false);
  const [institutions, setInstitutions] = useState([]);

  const { handleSubmit, getFieldProps, touched, errors } = useFormik({
    initialValues: {
      id: "",
      email: "",
      phone: "",
      lastName: "",
      gender: "",
      password: "",
      firstName: "",
      institutions: [],
      seniority: 0,
      isBjGraduate: false,
      teachingCertificate: false,
      professions: null
    },
    onSubmit,
    validateOnChange: false,
    validationSchema: validationSchema,
  });

  return (
    <form onSubmit={handleSubmit} className="form">
      <h3>רישום</h3>
      <TextField
        label="מספר זהות"
        required
        variant="outlined"
        error={touched?.id && !!errors?.id}
        helperText={touched?.id && errors?.id}
        {...getFieldProps("id")}
      />
      <TextField
        label="שם פרטי"
        required
        variant="outlined"
        error={touched?.firstName && !!errors?.firstName}
        helperText={touched?.firstName && errors?.firstName}
        {...getFieldProps("firstName")}
      />{" "}
      <TextField
        label="שם משפחה"
        required
        variant="outlined"
        error={touched?.lastName && !!errors?.lastName}
        helperText={touched?.lastName && errors?.lastName}
        {...getFieldProps("lastName")}
      />{" "}

      <RadioGroup
        label="מין"
        options={genderOptions}
        {...getFieldProps("gender")}
      />

      <TextField
        label="מייל"
        required
        variant="outlined"
        error={touched?.email && !!errors?.email}
        helperText={touched?.email && errors?.email}
        {...getFieldProps("email")}
      />
      <TextField
        label="טלפון"
        required
        variant="outlined"
        error={touched?.phone && !!errors?.phone}
        helperText={touched?.phone && errors?.phone}
        {...getFieldProps("phone")}
      />
      <TextField
        label="סיסמה לכניסות הבאות"
        required
        variant="outlined"
        error={touched?.password && !!errors?.password}
        helperText={touched?.password && errors?.password}
        {...getFieldProps("password")}
      />

      <TextField
        label="שנות נסיון"
        type="number"
        variant="outlined"
        InputProps={{ inputProps: { min: 0, max: 30 } }}
        {...getFieldProps("experience")}
      />

      <FormControlLabel
        control={<Checkbox color="primary" {...getFieldProps("BJGraduate")} />}
        label="בוגרת בית יעקב"
      />

      <FormControlLabel
        control={
          <Checkbox color="primary" {...getFieldProps("teachingCertificate")} />
        }
        label="בעל/ת תעודת הוראה"
      />

      <TextField
        label="התמחות"
        required
        variant="outlined"
        error={touched?.professions && !!errors?.professions}
        helperText={touched?.professions && errors?.professions}
        {...getFieldProps("professions")}
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

export default SignUpSubstitute;