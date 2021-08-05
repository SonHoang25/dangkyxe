import { TextField } from '@material-ui/core';
import React from 'react'
import { Controller } from 'react-hook-form';

const InputField = ({ name, control, value, materialUiProps, updateString }) => {

  return (
    <Controller
      name={name}
      control={control}
      value={value}
      render={({
        field: { onBlur, onChange, ref, value },
        fieldState: { error }
      }) => (
        <TextField
          onBlur={onBlur}
          value={value}
          {...materialUiProps}
          // onChange={onChange ? e => onChange(e, field) : e => field.onChange(e.target.value)}
          onChange={e => { updateString ? updateString(e, onChange) : onChange(e.target.value) }}
          error={!!error}
          helperText={error && error.message}
          inputRef={ref}
        />
      )}
      onFocus={true}
    />
  );
}

export default InputField
