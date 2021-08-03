import React, { useState } from 'react'
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Controller } from 'react-hook-form';

const InputDate = ({ name, control, materialUiProps, errors }) => {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <KeyboardDatePicker
            {...field}
            {...materialUiProps}
            value={selectedDate}
            // maxDateMessage='3'
            // minDateMessage='2'
            // invalidDateMessage='1'
            onChange={handleDateChange}
            error={Boolean(errors?.[name])}
            helperText={errors?.[name]?.message}
          />
        )}
      />
    </MuiPickersUtilsProvider>
  )
}
export default InputDate