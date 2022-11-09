import React from 'react'
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import "./Formstyle.css";



function Textarea(props) {
    const { label, name, ...rest} = props
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field as='textarea' name={name} id={name} {...rest} />
        <ErrorMessage name={name} component={TextError} />
        
    </div>
  )
}

export default Textarea