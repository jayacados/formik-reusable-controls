import React from 'react';
import Select from 'react-select';

export const CustomSelect = ({ placeholder, field, form, options, isMulti = false }) => {
  console.log('options', options);
  console.log('field', field);
  console.log('form', form);

  const onChange = option => {
    if (option) {
      form.setFieldValue(field.name, option);
    } else {
      form.setFieldValue(field.name, []);
    }
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter(option => field.value.indexOf(option.value) >= 0)
        : options.find(option => option.value === field.value);
    } else {
      return isMulti ? [] : '';
    }
  };

  return (
    <Select
      name={field.name}
      value={field.value['multiSelectOption']}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
    />
  );
};

export default CustomSelect;
