import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Controller } from 'react-hook-form';

const InputAutocomplete = ({ label, name, value, disabled, control, options, optionLabel, onChange = () => { } }) => {


  return (
    <Controller
      control={control}
      name={name}
      render={({
        field,
        fieldState: { error }
      }) => (
        <Autocomplete
          {...field}
          options={options}
          getOptionLabel={optionLabel}
          getOptionSelected={(selectedOption, currentOption) =>
            selectedOption?.value === currentOption?.value
          }
          disabled={options.length === 0}
          autoHighlight={true}
          autoComplete={true}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="outlined"
              error={!!error}
              helperText={error && error.message}
            />
          )}
        />
      )}
    />
  )
}


export default InputAutocomplete