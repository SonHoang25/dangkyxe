import { TextField } from '@material-ui/core';
import React from 'react'
import { Controller } from 'react-hook-form';

const InputField = ({ name, control, value, defaultValue = '', materialUiProps, onChange }) => {

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      value={value}
      render={({
        field,
        fieldState: { error }
      }) => (
        <TextField
          {...field}
          {...materialUiProps}
          onChange={onChange ? e => onChange(e, field) : e => field.onChange(e.target.value)}
          error={!!error}
          helperText={error && error.message}
        />
      )}
    />
  );
}

export default InputField
