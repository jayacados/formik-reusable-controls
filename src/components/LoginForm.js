import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Formik/FormikControl"

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: ""
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required")
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="email"
              name="email"
            />
            <FormikControl
              control="input"
              type="password"
              label="password"
              name="password"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
            {/* ========================================================= */}
            <br />
            <br />
            {/* Preview Tag */}
            <b>Login Form State</b>
            <pre>{JSON.stringify(formik, null, 2)}</pre>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
