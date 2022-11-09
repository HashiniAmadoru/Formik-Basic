import React from "react";
import "./../Formstyle.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./../FormikControl";

function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid format!").required("Required!"),
    password: Yup.string().required("Required!"),
  });

  const onSubmit = (values) => {
    console.log("data", values);
  };

  return (
    <div className="form-outline">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />

            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
            />

            <button type="submit" disabled={!formik.isValid}>LOGIN</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
