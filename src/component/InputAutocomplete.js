import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Controller } from 'react-hook-form';

const InputAutocomplete = ({ label, name, register, rules, defaultValue, disabled, control, errors, options, optionLabel, onChange = () => { } }) => {

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Autocomplete
          {...field}
          options={options}
          getOptionLabel={optionLabel}
          disabled={disabled}
          onChange={onChange}
          autoHighlight={true}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="outlined"
              error={Boolean(errors?.[name])}
              helperText={errors?.[name]?.message}
            />
          )}
        />
      )}
      rules={rules}
    />
  )
}


export default InputAutocomplete