import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  checkbox: {
    height: '48px'
  }
}))

const InputCheckbox = ({ name, label, color, checked, handleCheckbox }) => {
  const classes = useStyles();

  return (
    <div>
      <FormControlLabel
        className={classes.checkbox}
        control={<Checkbox
          color={color}
          checked={checked}
          onChange={handleCheckbox}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />}
        label={label}
        // control={control}
        color={color}
      />
    </div>
  )
}

export default InputCheckbox
