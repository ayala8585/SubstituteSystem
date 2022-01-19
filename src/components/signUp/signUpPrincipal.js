import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import { Checkbox, TextField, FormControlLabel } from "@material-ui/core";

import "./signUpTeacher.css";
import { RadioGroup } from "../ui";

const genderOptions = [
  { label: "זכר", value: "male" },
  { label: "נקבה", value: "female" },
];

const onSubmit = async (values) => {
  const result = await fetch("http://localhost:5000/principal", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  console.log("result: ", result);
};

const validationSchema = yup.object({
  id: yup
    .string()
    .required("שדה חובה")
    .matches(/^\d+$/, "תעודת זהות מכילה ספרות בלבד")
    .min(7, "שדה זה חייב להכיל מינינום 7 תווים"),
  city: yup.string().required("שדה חובה"),
  email: yup.string().required("שדה חובה").email("כתובת מייל לא חוקית"),
  phone: yup
    .string()
    .required("שדה חובה")
    .matches(/^\d+$/, "מספר טלפון מכיל ספרות בלבד")
    .min(7, "שדה זה חייב להכיל מינינום 7 תווים"),
  minAge: yup
    .number()
    .integer()
    .min(18, "גיל מינימלי חוקי גדול מ18")
    .max(40, "גיל מינימלי חוקי קטן מ40"),
  gender: yup.string().oneOf(["male", "female"], "זכר או נקבה בלבד"),
  street: yup.string().required("שדה חובה"),
  lastName: yup.string().required("שדה חובה"),
  password: yup
    .string()
    .required("שדה חובה")
    .min(6, "שדה זה חייב להכיל מינינום 6 תווים"),
  firstName: yup.string().required("שדה חובה"),
  homeNumber: yup
    .string()
    .required("שדה חובה")
    .matches(/^\d+$/, "מספר בית מכיל ספרות בלבד"),
  institutionName: yup.string().required("שדה חובה"),
  institutionEmail: yup
    .string()
    .required("שדה חובה")
    .email("כתובת מייל לא חוקית"),
  institutionPhone: yup
    .string()
    .required("שדה חובה")
    .matches(/^\d+$/, "מספר טלפון מכיל ספרות בלבד")
    .min(7, "שדה זה חייב להכיל מינינום 7 תווים"),
  institutionSymbol: yup
    .string()
    .required("שדה חובה")
    .matches(/^\d+$/, "סמל מוסד מכיל ספרות בלבד"),
});

const SignUpPrincipal = () => {
  const { handleSubmit, getFieldProps, touched, errors } = useFormik({
    initialValues: {
      id: "",
      city: "",
      email: "",
      phone: "",
      minAge: "",
      gender: "",
      street: "",
      lastName: "",
      password: "",
      firstName: "",
      homeNumber: "",
      experience: "",
      BJGraduate: false,
      institutionName: "",
      institutionEmail: "",
      institutionPhone: "",
      institutionSymbol: "",
      teachingCertificate: false,
    },
    onSubmit,
    validationSchema,
    validateOnChange: false,
  });

  return (
    <form onSubmit={handleSubmit} className="form">
      <h1>רישום</h1>
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
      <h1>פרטי מוסד</h1>
      <TextField
        label="סמל מוסד"
        required
        variant="outlined"
        error={touched?.institutionSymbol && !!errors?.institutionSymbol}
        helperText={touched?.institutionSymbol && errors?.institutionSymbol}
        {...getFieldProps("institutionSymbol")}
      />
      <TextField
        label="שם מוסד"
        required
        variant="outlined"
        error={touched?.institutionName && !!errors?.institutionName}
        helperText={touched?.institutionName && errors?.institutionName}
        {...getFieldProps("institutionName")}
      />
      <TextField
        label="מייל מוסד"
        required
        variant="outlined"
        error={touched?.institutionEmail && !!errors?.institutionEmail}
        helperText={touched?.institutionEmail && errors?.institutionEmail}
        {...getFieldProps("institutionEmail")}
      />
      <TextField
        label="טלפון מוסד"
        required
        variant="outlined"
        error={touched?.institutionPhone && !!errors?.institutionPhone}
        helperText={touched?.institutionPhone && errors?.institutionPhone}
        {...getFieldProps("institutionPhone")}
      />
      <h1> כתובת מוסד</h1>
      <TextField
        label="עיר"
        required
        variant="outlined"
        error={touched?.city && !!errors?.city}
        helperText={touched?.city && errors?.city}
        {...getFieldProps("city")}
      />
      <TextField
        label="רחוב"
        required
        variant="outlined"
        error={touched?.street && !!errors?.street}
        helperText={touched?.street && errors?.street}
        {...getFieldProps("street")}
      />
      <TextField
        label="מספר בנין"
        required
        variant="outlined"
        error={touched?.homeNumber && !!errors?.homeNumber}
        helperText={touched?.homeNumber && errors?.homeNumber}
        {...getFieldProps("homeNumber")}
      />
      <h1>דרישות מוסד</h1>
      <TextField
        label="שנות נסיון"
        type="number"
        variant="outlined"
        InputProps={{ inputProps: { min: 0, max: 30 } }}
        {...getFieldProps("experience")}
      />
      <TextField
        label="גיל מינימלי"
        type="number"
        variant="outlined"
        InputProps={{ inputProps: { min: 18, max: 40 } }}
        {...getFieldProps("minAge")}
      />
      <RadioGroup
        label="מין"
        options={genderOptions}
        {...getFieldProps("gender")}
      />
      <FormControlLabel
        control={<Checkbox color="primary" {...getFieldProps("BJGraduate")} />}
        label="בוגרת בית יעקב"
      />
      <FormControlLabel
        control={
          <Checkbox color="primary" {...getFieldProps("teachingCertificate")} />
        }
        label="תעודת הוראה"
      />
      <Button type="submit" variant="contained" color="primary">
        אישור
      </Button>
    </form>
  );
};

export default SignUpPrincipal;
