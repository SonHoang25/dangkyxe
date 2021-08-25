import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Controller } from "react-hook-form";

const InputAutocomplete = ({
    label,
    name,
    control,
    optionsData,
    shouldUnregister,
    disabled,
    required = false,
}) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onBlur, onChange, ref, value },
                fieldState: { error },
            }) => (
                <Autocomplete
                    onBlur={onBlur}
                    value={value}
                    fullWidth={true}
                    options={optionsData}
                    groupBy={(option) => option.type}
                    getOptionLabel={(option) =>
                        option.label ? option.label : ""
                    }
                    getOptionSelected={(selectedOption, currentOption) =>
                        selectedOption?.value === currentOption?.value
                    }
                    disabled={disabled}
                    loadingText="Đang tải..."
                    noOptionsText="Không có dữ liệu"
                    autoHighlight={true}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={label}
                            InputLabelProps={{ required }}
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
    );
};
export default InputAutocomplete;
