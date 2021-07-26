import { FormControl, FormHelperText, InputBase, InputLabel } from '@material-ui/core';
import React from 'react'
import { useForm } from 'react-hook-form';

const InputField = ({ helper, label, register, required, name, validate }) => {

  const { setError, formState: { errors } } = useForm()

  React.useEffect(() => {
    setError("lastName", {
      types: {
        required: "This is required",
      }
    });
  }, [setError])

  return (
    <FormControl>
      <InputLabel shrink
        // error={Boolean(errors?.lastName?.types)}
        required={required}>
        {label}
      </InputLabel>
      <InputBase
        variant="outlined"
        {...register(name, {
          required: "This is required.",
          validate: (value) => {
            if (!value) {
              return "This is validate required.";
            }
            return true;
          }
        })}
        error={Boolean(errors?.lastName?.types)}
      />

      {errors.lastName && errors.lastName.types && (
        <FormHelperText error={Boolean(errors?.lastName?.types)} >{errors.lastName.types.required}</FormHelperText>
      )}

      {/* <FormHelperText variant="filled" error={Boolean(helper)} >{helper}</FormHelperText> */}

    </FormControl>
  )
}

export default InputField
