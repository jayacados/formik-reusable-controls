import React from 'react';
import { MentionsInput, Mention } from 'react-mentions';

// helpers
import merge from './merge';
import defaultStyle from './defaultStyle';
import defaultMentionStyle from './defaultMentionStyle';

const CustomTextAreaMentions = ({ field, form, attr }) => {
  const onChange = e => {
    if (e) {
      form.setFieldValue(field.name, e.target.value);
    } else {
      form.setFieldValue(field.name, '');
    }
  };

  let style = merge({}, defaultStyle, {
    input: {
      overflow: 'auto',
      height: 90,
    },
    highlighter: {
      boxSizing: 'border-box',
      overflow: 'hidden',
      height: 90,
    },
  });

  return (
    <div>
      <MentionsInput
        style={style}
        placeholder={"Mention an attribute using '#'"}
        // formik props
        name={field.name}
        value={form.values[field.name]}
        onChange={onChange}
      >
        <Mention style={defaultMentionStyle} trigger='#' data={attr} markup='#[__display__](attr:__id__)' />
      </MentionsInput>
    </div>
  );
};

export default CustomTextAreaMentions;
