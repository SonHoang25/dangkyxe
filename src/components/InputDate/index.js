import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { Controller } from "react-hook-form";

const InputDate = (props) => {
    const {
        name,
        label,
        control,
        required = false,
        disabled,
        readOnly,
        ...restProps
    } = props;
    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onBlur, onChange, ref, value },
                fieldState: { error },
            }) => (
                <KeyboardDatePicker
                    InputLabelProps={{ required }}
                    onAccept={onBlur}
                    onBlur={onBlur}
                    onChange={(date) => onChange(date)}
                    inputRef={ref}
                    value={value}
                    label={label}
                    error={!!error}
                    helperText={error && error.message}
                    disabled={disabled}
                    readOnly={readOnly}
                    // disableFuture={true}
                    {...restProps}
                />
            )}
        />
    );
};
export default InputDate;
