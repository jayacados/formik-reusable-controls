import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

// React Date Picker
import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              // required props for Dateview component below (from doc)
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default DatePicker;

/*
setFieldValue --> allows you to programmaticaly set a field's value
*/
