// FormikContainer.js is used to test all re-usable components
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../Formik/FormikControl';

const FormikContainer = () => {
  const dropdownOptions = [
    { key: 'Select an option', value: 'placeholder' },
    { key: 'Option 1', value: 'dOption1' },
    { key: 'Option 2', value: 'dOption2' },
    { key: 'Option 3', value: 'dOption3' },
  ];
  const multiSelectDropdownOptions = [
    { label: 'Select an option', value: 'placeholder' },
    { label: 'Option 1', value: 'dOption1' },
    { label: 'Option 2', value: 'dOption2' },
    { label: 'Option 3', value: 'dOption3' },
  ];
  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' },
  ];
  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOption3' },
  ];
  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: [],
    birthDate: null,
    multiSelectOption: [],
  };
  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().length('1', 'Must check at least one').required('Required'),
    birthDate: Yup.date().required('Required').nullable(),
    multiSelectOption: Yup.array().min(3, 'Pick at least 3 tags').required('Required'),
  });
  const onSubmit = values => console.log('Form data', values);
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {formik => (
        <Form>
          {/* Input  */}
          <FormikControl control='input' type='email' label='Email' name='email' />
          {/* TextArea */}
          <FormikControl control='textarea' type='description' label='Description' name='description' />
          {/* Select dropdown */}
          <FormikControl control='select' label='Select a topic' name='selectOption' options={dropdownOptions} />
          {/* Radio Button */}
          <FormikControl control='radio' label='Radio Topic' name='radioOption' options={radioOptions} />
          {/* Checkbox */}
          <FormikControl control='checkbox' label='Checkbox topics' name='checkboxOption' options={checkboxOptions} />
          {/* Date Picker */}
          <FormikControl control='date' label='Pick a date' name='birthDate' />
          {/* Multi-select */}
          <FormikControl
            control='multi-select'
            label='Select multiple options'
            name='multiSelectOption'
            options={multiSelectDropdownOptions}
          />
          <button type='submit'> Submit </button>
          {/* ========================================================= */}
          <br />
          <br />
          {/* Preview Tag */}
          Formik State
          <pre>{JSON.stringify(formik, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;

/*
FormikControl component decides which form field have to be rendered, based on 1 particular prop

[Input.js] FormikControl - 33
  Props
    control="input" --> required --> to know type of Formik control we need to render
    label='Email' --> UI - required to label the form field
    name='email' --> required by Formik, for the field and message component + formik state
    type='email' --> can be email, text, or password (based on form field)

Steps to create a reusable formik input component
1) define Input formik control
2) extract necessary props
3) import that component into FormikControl.js as a switch case
============================================================================
[TextArea.js] FormikControl - 34
    Props
      control='textarea'
      label='Description'
      name='description'
============================================================================
[Select.js] FormikControl  - 35 (aka dropdown menu)
    Props
      control='select'  --> required, renders dropdown
      label='Select a topic' --> label text for formf ield
      name='selectOption' --> required for field and error msg compoennt
      options=[{key, value}] --> required an array of objects to populate dropdown
============================================================================
[RadioButton.js] FormikControl  - 36 (Radio)
  Props
    control='radio'
    label='Pick one option'
    name='radioOption'
    options=[{key, value}] --> options to click on
============================================================================
[Checkbox.js] FormikControl  - 37 (Checkbox Group)
  Props
    control='checkbox'
    label='Pick options'
    name='checkboxOptions'
    options=[{key, value}]

*/
