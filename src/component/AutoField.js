import { InputLabel } from '@material-ui/core'
import React from 'react'
import InputAutocomplete from './InputAutocomplete';

const AutoField = (helper, label) => {
  return (
    <div>
      <InputLabel shrink error={Boolean(helper)} >
        {label}
      </InputLabel>
      <InputAutocomplete />
    </div>
  )
}

export default AutoField