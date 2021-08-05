import React from 'react'
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Controller } from 'react-hook-form';

const InputDate = ({ name, control, materialUiProps }) => {

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onBlur, onChange, ref, value },
          fieldState: { error }
        }) => (
          <KeyboardDatePicker
            {...materialUiProps}
            onBlur={onBlur}
            value={value}
            onChange={(e, option) => {
              onChange(option);
            }}
            error={!!error}
            helperText={error && error.message}
            disableFuture={true}
          />
        )}
      />
    </MuiPickersUtilsProvider>
  )
}
export default InputDate