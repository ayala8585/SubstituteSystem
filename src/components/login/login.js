import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, TextField } from "@material-ui/core";
// import jwt_decode from "jwt-decode";

import "../signUp/signUpTeacher.css";

const validationSchema = yup.object({
  id: yup.string().required("שדה חובה"),
  password: yup.string().required("שדה חובה"),
});

const Login = () => {

  const onSubmit = async (values) => {
    console.log("submit");
    try {
      const response = await fetch(
        `http://localhost:5000/login?id=${values.id}&password=${values.password}`,
        {
          method: "GET",
          // body: JSON.stringify(values),
        }
      ).then((res) => res.json());
      console.log("after");
      console.log({response})

      const { token, contact } = response

      localStorage.setItem("token", token);
    } catch (error) {
      console.log({ error });
    }
    // .then((res) => res.json())
    // .then((token) => {
    //   const decoded = jwt_decode(token);
    //   console.log(decoded);
    // })
    // .catch((err) => {
    //   console.log("error", err);
    // });
  };

  const { handleSubmit, getFieldProps, touched, errors, values } = useFormik({
    initialValues: {
      id: "",
      password: "",
    },
    onSubmit,
    validateOnChange: false,
    validationSchema,
  });

  return (
    <form onSubmit={handleSubmit} className="form">
      <h3>התחברות</h3>
      <TextField
        label="מספר זהות"
        required
        variant="outlined"
        error={touched?.id && !!errors?.id}
        helperText={touched?.id && errors?.id}
        {...getFieldProps("id")}
      />
      <TextField
        label="סיסמה"
        required
        variant="outlined"
        error={touched?.password && !!errors?.password}
        helperText={touched?.password && errors?.password}
        {...getFieldProps("password")}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!values.id || !values.password}
      >
        כניסה
      </Button>
    </form>
  );
};

export default Login;
