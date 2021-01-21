import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import CustomTextAreaMentions from './sub-components/CustomTextAreaMentions';

const TextAreaMentions = props => {
  const { label, name, ...rest } = props;
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} component={CustomTextAreaMentions} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default TextAreaMentions;
