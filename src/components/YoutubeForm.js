import React, { useState } from "react";
import "./Formstyle.css";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comment: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
  phNumbers: [""],
};

const savedValues = {
  name: "Hashini",
  email: "hashini@gmail.com",
  channel: "a",
  comment: "b",
  address: "c",
  social: {
    facebook: "d",
    twitter: "e",
  },
  phoneNumber: ["071", "0136"],
  phNumbers: ["1"],
};

const onSubmit = (values, onSubmitProps) => {
  console.log("form data", values);
  console.log("submitprops", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid format!").required("Required!"),
  channel: Yup.string().required("Required"),
  comment: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  social: Yup.object().shape({
    facebook: Yup.string().required("Facebook username is required"),
    twitter: Yup.string().required("Twitter username is required"),
  }),
  phoneNumber: Yup.array(Yup.number().required("Required")),
});

function YoutubeForm() {
  const [formValues, setFormValues] = useState(null);
  return (
    <div className='cover'>
    <div className="form-outline">
      <Formik
        initialValues={formValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
        // validateOnMount
      >
        {(formik) => {
          return (
            <Form>
              <div className="form-control">
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name" component={TextError} />
              </div>

              <div className="form-control">
                <label htmlFor="email">Email</label>
                <Field type="text" id="email" name="email" />
                <ErrorMessage name="email">
                  {(errormsg) => <div className="error">{errormsg}</div>}
                </ErrorMessage>
              </div>

              <div className="form-control">
                <label htmlFor="channel">Channel</label>
                <Field type="text" id="channel" name="channel" />
                <ErrorMessage name="channel" component={TextError} />
              </div>

              <div className="form-control">
                <label htmlFor="comment">Comment</label>
                <Field type="textarea" id="comment" name="comment" />
                <ErrorMessage name="comment" component={TextError} />
              </div>

              <div className="form-control">
                <label htmlFor="address">Address</label>
                <Field name="address">
                  {(props) => {
                    const { field, form, meta } = props;
                    return (
                      <div>
                        <input type="text" id="address" {...field} />
                        {meta.touched && meta.error ? (
                          <div className="error">{meta.error}</div>
                        ) : null}
                      </div>
                    );
                  }}
                </Field>
              </div>

              <div className="form-control">
                <label htmlFor="facebook">Facebook</label>
                <Field type="text" id="facebook" name="social.facebook" />
                <ErrorMessage name="social.facebook" component={TextError} />
              </div>

              <div className="form-control">
                <label htmlFor="twitter">Twitter</label>
                <Field type="text" id="twitter" name="social.twitter" />
                <ErrorMessage name="social.twitter" component={TextError} />
              </div>

              <div className="form-control">
                <label htmlFor="primaryPh">Primary Phone Number</label>
                <Field type="text" id="primaryPh" name="phoneNumber[0]" />
                <ErrorMessage name="phoneNumber[0]" component={TextError} />
              </div>

              <div className="form-control">
                <label htmlFor="secondaryPh">Secondary Phone Number</label>
                <Field type="text" id="secondaryPh" name="phoneNumber[1]" />
                <ErrorMessage name="phoneNumber[1]" component={TextError} />
              </div>

              {/* <div className="form-control">
                <label htmlFor="secondaryPh">List of Phone Number</label>
                <FieldArray name="phNumbers">
                  {(fieldArrayProps) => {
                    console.log("fieldArrayProps", fieldArrayProps);
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;
                    return (
                      <div>
                        {phNumbers.map((phNumber, index) => (
                          <div key={index}>
                            <Field name={`phNumbers[${index}]`} />
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                -
                              </button>
                            )}

                            <button type="button" onClick={() => push("")}>
                              +
                            </button>
                          </div>
                        ))}
                      </div>
                    );
                  }}
                </FieldArray>
              </div> */}

              {/* <button className="form-in" type="submit" disabled={!formik.isValid}>
              Submit
            </button> */}
              <div className="center">
                <button
                  type="button"
                  onClick={() => setFormValues(savedValues)}
                >
                  Load Data
                </button>
                <button type="reset">Reset</button>
                <button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
    </div>
  );
}

export default YoutubeForm;
