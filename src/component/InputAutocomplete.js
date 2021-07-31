import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const InputAutocomplete = ({ label, name, register, defaultValue, disabled, control, errors, options, onChange = () => { } }) => {

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.ten}
      disabled={disabled}
      onChange={onChange}
      autoHighlight={true}
      renderInput={(params) => <TextField
        {...params}
        label={label}
        variant="outlined" {...register(name, { required: "Trường bắt buộc" })}
        error={Boolean(errors?.[name])}
        helperText={errors?.[name]?.message}
      />
      }
    />
  )
}


export default InputAutocomplete