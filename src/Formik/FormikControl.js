import React from "react";
import Input from "./components/Input";
import RadioButton from "./components/RadioButton";
import Select from "./components/Select";
import TextArea from "./components/TextArea";
import Checkbox from "./components/Checkbox";
import DatePicker from "./components/DatePicker";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
