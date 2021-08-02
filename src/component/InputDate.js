import React from 'react'
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { FormHelperText } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const InputDate = ({ name, control, materialUiProps, errors }) => {

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <KeyboardDatePicker
            {...field}
            {...materialUiProps}
            maxDateMessage='3'
            minDateMessage='2'
            invalidDateMessage='1'
            error={Boolean(errors?.[name])}
            helperText={errors?.[name]?.message}
          />
        )}
      />
      <FormHelperText error={Boolean(errors?.[name])}>{errors?.[name]?.message}</FormHelperText>
    </MuiPickersUtilsProvider>
  )
}
export default InputDate