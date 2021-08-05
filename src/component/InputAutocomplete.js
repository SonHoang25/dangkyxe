import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Controller } from 'react-hook-form';

const InputAutocomplete = ({ label, name, control, optionsData, shouldUnregister }) => {

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onBlur, onChange, ref, value },
        fieldState: { error }
      }) => (
        <Autocomplete
          onBlur={onBlur}
          value={value}
          options={optionsData ? optionsData : []}
          getOptionLabel={option => option.label}
          getOptionSelected={(selectedOption, currentOption) => (
            selectedOption?.value === currentOption?.value
          )}
          disabled={optionsData?.length === 0}
          loadingText='Đang tải...'
          noOptionsText='Không có dữ liệu'
          autoHighlight={true}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="outlined"
              error={!!error}
              helperText={error && error.message}
            />
          )}
          onChange={(e, option) => {
            onChange(option);
          }}
        />
      )}
      shouldUnregister={shouldUnregister}
    />
  )
}
export default InputAutocomplete