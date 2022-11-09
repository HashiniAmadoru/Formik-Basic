import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import "./Formstyle.css";

function RadioOption(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label> <br />
      <Field name={name} {...rest}>
        {
        ({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                
                
                <div className="radio">
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                {option.key}
                </div>
                
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default RadioOption;
