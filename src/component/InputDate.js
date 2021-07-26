import React, { useEffect, useState } from 'react'
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { FormControl, InputLabel } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const InputDate = ({ name, helper, views, label, placeholder, format, register, required, control }) => {

  const [viewYear, setViewYear] = useState()

  useEffect(() => {
    setViewYear(views)
  }, [views])

  const [selectedDate, handleDateChange] = useState(new Date());

  // console.log(selectedDate)
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        name={name}
        control={control}
        render={({ field: { ref, ...rest } }) => (
          <KeyboardDatePicker
            views={viewYear}
            value={selectedDate}
            placeholder={placeholder}
            onChange={handleDateChange}
            disableFuture="true"
            format={format}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
            {...rest}
            label={label}
          />
        )}
      />
    </MuiPickersUtilsProvider>
  )
}
export default InputDate
