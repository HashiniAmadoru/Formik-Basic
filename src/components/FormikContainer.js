import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const dropdownOption = [
    { key: "Selct an Option", value: "" },
    { key: "Option 1", value: "Option 1" },
    { key: "Option 2", value: "Option 2" },
    { key: "Option 3", value: "Option 3" },
  ];

  const radioOptions = [
    { key: "Option 11", value: "rOption 1" },
    { key: "Option 21", value: "rOption 2" },
    { key: "Option 31", value: "rOption 3" },
  ];

  const checkBoxOptions = [
    { key: "Option 10", value: "1", isChecked: false },
    { key: "Option 20", value: "2", isChecked: false },
    { key: "Option 30", value: "3", isChecked: false },
  ];

  const initialValues = {
    email: "",
    name: "",
    textarea: "",
    selectOption: "",
    radioOption: "",
    checkbox: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Require").email("Invalid Format"),
    name: Yup.string().required("Required"),
    textarea: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkbox: Yup.array().min(1, "Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => console.log("form data new", values);
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
              type="text"
              label="Name"
              name="name"
            />

            <FormikControl
              control="textarea"
              type="textarea"
              label="Comment"
              name="textarea"
            />

            <FormikControl
              control="select"
              type="select"
              label="Select Option"
              name="selectOption"
              options={dropdownOption}
            />

            <FormikControl
              control="radio"
              label="Radio topic"
              name="radioOption"
              options={radioOptions}
            />

            <FormikControl
              control="checkbox"
              label="Check Box topic"
              name="checkbox"
              options={checkBoxOptions}
            />

            <FormikControl
              control="date"
              label="Pick a Date"
              name="birthDate"
            />

            <button className="form-in" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
