import { TextField } from '@material-ui/core';
import React from 'react'
import { Controller } from 'react-hook-form';

const InputField = ({ name, control, rules, value, defaultValue = '', materialUiProps, errors, onChange }) => {

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      value={value}
      render={({ field }) => (
        <TextField
          {...field}
          {...materialUiProps}
          onChange={onChange ? e => onChange(e, field) : e => field.onChange(e.target.value)}
          error={Boolean(errors?.[name])}
          helperText={errors?.[name]?.message}
        />
      )}
      rules={rules}
    />
  );
}

export default InputField
