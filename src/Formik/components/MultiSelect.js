import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';
import CustomMultiSelect from './CustomMultiSelect';

const Select = props => {
  const { label, name, options, ...rest } = props;
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        name={name}
        options={options}
        component={CustomMultiSelect}
        placeholder='Select one or multiple options'
        isMulti={true}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
