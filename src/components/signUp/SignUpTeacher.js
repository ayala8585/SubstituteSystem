import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, TextField } from "@material-ui/core";

import "./signUpTeacher.css";
import ValidateSelect from "../common/validateSelect";
import ValidateTextField from "../common/validateTextField";

const validationSchema = yup.object({
  id: yup
    .string()
    .required("שדה חובה")
    .matches(/^\d+$/,"תעודת זהות מכילה ספרות בלבד")
    .min(7, "שדה זה חייב להכיל מינינום 7 תווים"),
  email: yup.string().required("שדה חובה").email("כתובת מייל לא חוקית"),
  phone: yup
    .string()
    .required("שדה חובה")
    .matches(/^\d+$/,"מספר טלפון מכיל ספרות בלבד")
    .min(7, "שדה זה חייב להכיל מינינום 7 תווים"),
  lastName: yup.string().required("שדה חובה"),
  password: yup
    .string()
    .required("שדה חובה")
    .min(6, "שדה זה חייב להכיל מינינום 6 תווים"),
  firstName: yup.string().required("שדה חובה"),
});

const onSubmit = async (values) => {
  const body = {
    id: values.id,
    email: values.email,
    phone: values.phone,
    lastName: values.lastName,
    password: values.password,
    firstName: values.firstName,
  };
  console.log("body", body);
  const result = await fetch("http://localhost:5000/teacher", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  console.log("result: ", result);
};

const SignUpTeacher = () => {
  const [isInstitutionPanelOpen, setIsInstitutionPanelOpen] = useState(false);
  const [institutions, setInstitutions] = useState([]);

  const institutionsList = ["a", "b", "c"];

  const { handleSubmit, getFieldProps, touched, errors } = useFormik({
    initialValues: {
      id: "",
      email: "",
      phone: "",
      lastName: "",
      password: "",
      firstName: "",
      institutions: [],
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
